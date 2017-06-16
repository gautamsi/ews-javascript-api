return

http://unicode.org/repos/cldr/trunk/common/supplemental/windowsZones.xml


$mapping = Invoke-WebRequest -Uri "http://unicode.org/repos/cldr/trunk/common/supplemental/windowsZones.xml"
$tzmappingdata = (([xml]$mapping.Content).supplementalData.windowsZones.mapTimezones.mapZone) | select other,territory,type

((([xml]$mapping.Content).supplementalData.windowsZones.mapTimezones.mapZone) | select other,territory,type | ConvertTo-Json).length /1kb
(([xml]$mapping.Content).supplementalData.windowsZones.mapTimezones.mapZone) | select other,territory,type | %{$_.type} | select -Unique


$tzmapping = @{}
$tzmappingdata | %{
    $tmd = $_
    $t = $_.type.split(" ");
    $t | %{
        $tzmapping[$_] = $tmd.other
    }
}


($tzmapping | ConvertTo-Json -Compress).length


$tzmapping2 = @{}
$tzmapping.Keys | sort | %{
    $tzmapping2[$tzmapping[$_]] = $_
}


$tzmapping2.Keys | sort | %{$_ + " | " +  $tzmapping2[$_]}


$tzmapping2 = @{}
$tzmappingdata | %{
    $tmd = $_
    if($tzmapping2[$tmd.other]){
        $t = $_.type.split(" ");
        $t | %{
            if($tzmapping2[$tmd.other] -notcontains $_){
                $tzmapping2[$tmd.other] += $_
            }
        }
    }
    else{
        $t = $_.type.split(" ") | select -Unique
        $tzmapping2[$tmd.other] = @()
        $t | %{
            
            $tzmapping2[$tmd.other] += $_
        }
    }
    
}



($tzmapping2 | ConvertTo-Json -Compress).length

$x = [System.TimeZoneInfo]::GetSystemTimeZones()
$x2 = $x | select Id,*name,Supp*,@{name="Offset";expr={$_.BaseUtcOffset.TotalMinutes}}
$x4 = @{};$x2 | %{$x4[$_.Id] = $_.id + "|" + $_.DisplayName.replace("&","&amp;") + "|" + $_.StandardName + "|" + $_.DaylightName + "|" + $_.SupportsDaylightSavingTime + "|" + $_.offset}
$x5 = @{};$x2 | %{$x5[$_.Id] = @([string[]]$tzmapping2[$_.id], $_.id,$_.DisplayName.replace("&","&amp;"),$_.StandardName,$_.DaylightName,$_.SupportsDaylightSavingTime,$_.offset)}
$map2 = $x4

$map2 = [hashtable](Get-Content "D:\dr\gh\ews-javascript-api_2ndCopy\src\js\tzmapping.WinIDData3.json" -Raw | ConvertFrom-Json )
$map2 = Import-Clixml "D:\dr\gh\ews-javascript-api_2ndCopy\src\js\tzmapping.WinIDData3.xml"

$map3 = @{};$map2.keys | %{$map3[$_] = $tzmapping2[$_] + "|" + $map2[$_]}
$map4 = @{}; $tzmapping.Keys | %{$map4[$_] = $_ + "|" + $map2[$tzmapping[$_]]}

$map5 = $map3 + $map4

$map5.Count
$map6 = $tzmapping + $map3
$map6 | ConvertTo-Json -Compress | Out-File .\tzmapping.WinIDData5_____.jsondir


$map7 = $tzmapping + $tzmapping2 + $map2