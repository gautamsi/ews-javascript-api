return
$enu = Get-Content enums.ts
return


$start = $false
$name = ""
$modulenameLine = ""
$fin = $true
$lines = @()
$enu | %{
    $l = $_;
    if($l.Contains("module M")){
     $modulenameLine = $l
    }
    if($l.Contains(" enum "))
    {
        $start = $true
        $fin = $false
        $lines = @()
        $name = $l -replace "//","" -replace "export enum","" -replace "{","" -replace " ",""
        $lines+=$modulenameLine
    }
    if(!$fin)
    {
        $lines += $l
    }
    if(!$fin -and $l.Contains("}"))
    {
        $lines += "}"
        $lines +=""
        $lines += "import _export = $($modulenameLine -replace 'module','' -replace '{','' -replace ' ','').$name;"
        $lines += "export = _export;"
        #$lines
        if($name -ne $null -and $name -ne "")
        {
            Write-Verbose $name -Verbose
            $lines | Out-File "$name.ts" -Append
        }
        "-------"
        $fin = $true
    }
    
}