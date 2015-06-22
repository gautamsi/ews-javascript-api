return
cd D:\dr\lgh\ews-javascript-api\src\js

$content = Get-Content ..\..\errors.txt
$lines = $content | ?{$_.contains("TS2304")}
$dupli = $content | ?{$_.contains("TS2300")}
$ts2305 = $content | ?{$_.contains("TS2305")}
$NoTS7017 = $content |?{!$_.contains("TS7017")}


#src/js/Attributes/RequiredServerVersionAttribute.ts(3,11): error TS2304: Cannot find name 'ExchangeVersion'.
$fixes = @()
$lines |%{if($_ -match '(\A(?<file>.*)\()([^'']+).* (.(?<target>.*)[^.]+)') {
        $fix = "" | select FileToFix,Symbol
        $fix.FileToFix = $matches.file
        $fix.Symbol = $matches.target
        if(!$fix.FileToFix.EndsWith(".d.ts")){
            $fixes += $fix
        }
    }
}
#$fixes
#| ?{$_.filetofix.contains("AddressEntityCollection")}
$fixes  | group filetofix |  %{ ############## - use this to fix TS2304
        #Write-Verbose $_.name.Replace("src/js/","") -Verbose
        $filetofix = dir $_.name.Replace("src/js/","").replace("/","\") -ErrorAction SilentlyContinue        
        if($filetofix -eq $null){
            $filetofix = dir $_.name.Replace("test/","../../test/").replace("/","\") -ErrorAction SilentlyContinue 
        }
        if($filetofix -ne $null){
            $insercontent = @()
            $_.group | select -Unique -Property symbol | %{      
            
            #Write-Verbose $_.symbol -Verbose
            $symfile = dir ($_.symbol + ".ts") -Recurse
            if($symfile){
                
                #Write-Verbose $uri1 -Verbose
                #Write-Verbose $uri2 -Verbose
               $uri1 = New-Object System.Uri -ArgumentList $filetofix.FullName
               $uri2 = New-Object System.Uri -ArgumentList $symfile.FullName
               $importfile = $uri1.MakeRelative($uri2).replace(".ts","")
               if(!$importfile.StartsWith(".")){$importfile = "./" + $importfile}
               $importstatement = "import {" + $_.symbol + "} from """ + $importfile + """;"
               Write-Verbose ($filetofix.FullName + " | " + $importstatement) -Verbose
               $insercontent += $importstatement
            }
            else
            {
                Write-Verbose ($filetofix.FullName + " | " +  $_.symbol) -Verbose
            }
        }
        #$_.group.count        
        #$insercontent

        $filecontent = Get-Content $filetofix.FullName
        $filecontent = $insercontent + $filecontent
        $filecontent | Set-Content -Path $filetofix 
        #$filecontent
    }
}






$fixes = @(); $NoTS7017 |%{if($_ -match '(\A(?<file>.*)\()([^'']+).* (.(?<target>.*)[^.]+)') {
        $fix = "" | select FileToFix,Symbol
        $fix.FileToFix = $matches.file
        $fix.Symbol = $matches.target
        $fixes += $fix
    }
}


return;$fixes[0] | %{
    #Write-Verbose $_.FileToFix.Replace("src/js/","").Replace("/","\") -Verbose
    $filetofix = dir $_.FileToFix.Replace("src/js/","").replace("/","\") -ErrorAction SilentlyContinue
    if($filetofix){
        Write-Verbose $_.symbol -Verbose
        $symfile = dir ($_.symbol + ".ts") -Recurse
        if($symfile){
            Write-Verbose $uri1 -Verbose
            Write-Verbose $uri2 -Verbose
           $uri1 = New-Object System.Uri -ArgumentList $filetofix.FullName
           $uri2 = New-Object System.Uri -ArgumentList $symfile.FullName
           $importfile = $uri1.MakeRelative($uri2)
           $importstatement = "import " + $_.symbol + " = require(""" + $importfile + """);"
           Write-Verbose $importstatement -Verbose

        }
    }
}






return;$ff = $fixes  | group filetofix |  %{ ##########   checking if already fixed by using import statement search
        #Write-Verbose $_.name.Replace("src/js/","") -Verbose
        $filetofix = dir $_.name.Replace("src/js/","").replace("/","\") -ErrorAction SilentlyContinue        
        if($filetofix){
            $insercontent = @()
            $_.group | select -Unique -Property symbol | %{      
            
            #Write-Verbose $_.symbol -Verbose
            $symfile = dir ($_.symbol + ".ts") -Recurse
            if($symfile){
                
                #Write-Verbose $uri1 -Verbose
                #Write-Verbose $uri2 -Verbose
               $uri1 = New-Object System.Uri -ArgumentList $filetofix.FullName
               $uri2 = New-Object System.Uri -ArgumentList $symfile.FullName
               $importfile = $uri1.MakeRelative($uri2).replace(".ts","")
               if(!$importfile.StartsWith(".")){$importfile = "./" + $importfile}
               $importstatement = "import " + $_.symbol + " = require(""" + $importfile + """);"
               Write-Verbose ($filetofix.FullName + " | " + $importstatement) -Verbose
               $insercontent += $importstatement
            }
            else
            {
                Write-Verbose ($filetofix.FullName + " | " +  $_.symbol) -Verbose
            }
        }
        #$_.group.count        
        #$insercontent
        $alreadyfixed = $filetofix | Select-String -SimpleMatch $importstatement
        $alreadyfixed
        #$filecontent = Get-Content $filetofix.FullName
        #$filecontent = $insercontent + $filecontent
        #$filecontent | Set-Content -Path $filetofix 
        #$filecontent

        
    }
}

$ff












return 
############# fix to copy ts file

$matches = dir *.ts -Recurse | Select-String -SimpleMatch "<copyright file=" #| %{$_.FileName}

$matches | %{
    $path = $_.Path;
    $file = dir (Join-Path "..\..\..\ews-javascriptapi_generatedTSFiles\" $_.Filename) -ErrorAction SilentlyContinue
    #if(!$file){
    #    #$path.Replace("D:\dr\gh\ews-javascript-api\src\js\","").Replace($_.Filename,""); 
    #    $target = $path.Replace("D:\dr\gh\ews-javascript-api\src\js\","D:\dr\gh\ews-javascriptapi_generatedTSFiles\copied\");
    #    $targetpath = $target.Replace($_.Filename,"");
    #    $targetpath
    #    md $targetpath
    #    copy $path $target -Force
    #}
    #if($file)
    #{
    #    copy $file $path -Force
    #}

    if(!$file){
        $_.FileName
    }
}


$matches1 = dir *.ts -Recurse | Select-String -SimpleMatch "<copyright file=" #| %{$_.FileName}


$files | %{
    $path = $_.FullName;
    $file = dir (Join-Path "..\..\..\ews-javascriptapi_generatedTSFiles\" ($_.Name.replace("SearchFilter.",""))) -ErrorAction SilentlyContinue
    #if(!$file){
    #    #$path.Replace("D:\dr\gh\ews-javascript-api\src\js\","").Replace($_.Filename,""); 
    #    $target = $path.Replace("D:\dr\gh\ews-javascript-api\src\js\","D:\dr\gh\ews-javascriptapi_generatedTSFiles\copied\");
    #    $targetpath = $target.Replace($_.Filename,"");
    #    $targetpath
    #    md $targetpath
    #    copy $path $target -Force
    #}
    if($file)
    {
        #Remove-Item ($file.BaseName + ".js") -Verbose
        copy $file $path -Force -Verbose

    }
}




###################### bulk check missing export=

$aa = dir *.ts -Recurse | Select-String -SimpleMatch "//module Microsoft.Exchange.WebServices.Data {" -Context 3,0

$aa | %{
    $m = $_
    $s = $m.Context.PreContext | ?{$_.contains("export")}
    if(!$s){
        $m.Filename
    }
}



return




 "pattern to detect modulename -"
  if("var EwsUtilities = require(`"./EwsUtilities`");" -match '\(\".\/((?<module>.*)\")' ){$Matches}
 
 regex for module line
 if("var EwsUtilities = require(`"./EwsUtilities`");" -match '.*(var).*(require).*\(\".\/(?<moduleName>.*)\"\);' ){$Matches}
 if("var EwsUtilities = require(`"../asda/dasdada/dasda/ServiceObjectInfo`");" -match '.*(var).*(require).*\(.*\/(?<moduleName>.*)\"\);' ){$Matches} # refined 

 $f = dir *.js -Recurse

 $ews = $f | Select-String -Pattern  '.*(var).*(require).*\(\".\/(?<moduleName>.*)\"\);'

 $util = dir ewsutilities.js -Recurse |  Select-String -Pattern  '.*(var).*(require).*\(.*\/(?<moduleName>.*)\"\);'

 $util | %{
    $moduleName = $_.Matches | %{$_.Groups["moduleName"]}
    Write-Verbose $moduleName -Verbose
    
 }


 cd D:\dr\lgh\ews-javascript-api\build\output\src\
[Collections.Generic.List[String]]$looping  = @()
[Collections.Generic.List[String]]$done  = @()
 function subm ($f, $indent = 0, $x = $f){
    $indention = "`t" * $indent 
        $match = dir ($f + ".js") -Recurse |  Select-String -Pattern  '.*(var).*(require).*\(.*\/(?<moduleName>.*)\"\);'
        if($match)
        {
            $moduleNames = $match | %{$_.Matches | %{$_.Groups["moduleName"].Value}}
            $moduleNames | ?{!$global:done.Contains($_)} | %{
                if($_ -like $x){
                    Write-Warning "$indention found loop - $($f<#$match.Filename | select -Unique#>) "
                    #$global:looping.Contains($f)
                    if(!$global:looping.Contains($f)){$global:looping.Add($f)}
                    
                }
                elseif(!$global:looping.contains($_)){
                    $global:looping;                
                    Write-Verbose "$indention file $f - chained to $_" -Verbose
                    $indent++      
                    if($_ -ne $x){$global:done.Add($_)}
                    subm $_ $indent $x
                    $indent--
                }
                else{
                    Write-Verbose "$indention skipped $f" -Verbose
                }
            }

        }
}
subm "EmailMessageSchema" 0

   $moduleName = $util | %{$_.Matches | %{$_.Groups["moduleName"].Value.ToString()}}

 Write-Verbose $moduleName -Verbose





 d:
cd\
cd .\dr\gh\ews-javascript-api
cd .\src\js
$ts = dir *.ts -Exclude *.d.ts -Recurse
$ts.Count
dir *.ts | measure
dir *.ts -Recurse | measure
$ts | %{$_.name}
$ts | %{$_.fullname}
$ts | %{$_.fullname.replace(".ts",".js")}
$ts | %{$_.fullname.replace(".ts",".js") | Test-Path}
$ts | %{$_.fullname.replace(".ts",".js") | Test-Path} | ?{!$_}
$ts | %{$_.fullname.replace(".ts",".js") | del -Confirm}
$ts | %{$_.fullname.replace(".ts",".js") | del}












script to fix throw not implemented error ro something traceable.
return;
$fs = dir *.ts -Recurse | Select-String -pattern "{ throw new Error(`"Not implemented.`");" -SimpleMatch | %{$_.path} | select -Unique

foreach($f in $fs){
    $c = Get-Content $f
    $fn = ([System.IO.FileInfo]$f).Name
    $fp = $f.Replace("\src\","\test\src\")
    $path = ([System.IO.FileInfo]$fp).DirectoryName
    mkdir $path -ErrorAction SilentlyContinue

    if($c){
        $c.Where({$_.contains("{ throw new Error(`"Not implemented.`");")}) | %{
            $l = $_.replace("/","").trim();
            Write-Verbose ("$fn - " + $l.Substring(0,$l.indexof("("))) -Verbose; 
            $c[$c.IndexOf($_)] = $_.replace("{ throw new Error(`"Not implemented.`");", "{ throw new Error(`"$fn - " + $l.Substring(0,$l.indexof("(")) + " : Not implemented.`");") 
        }
        #$c
        #$c | Set-Content $fp -Force
        $c | Set-Content $f -Force
        Start-Sleep -Milliseconds 200
        Write-Verbose $fp -Verbose
    }
}



return
# import module = require -> to -> import {module} from file

#if('import SortDirection = require("../../src/js/Enumerations/SortDirection");'  -match'^import\W(?<module>\w*)\s*=.*\((?<target>.*)\).*'){$Matches;$Matches["target"].Length}
$pattern = '^import\W(?<module>\w*)\s*=.*\((?<target>.*)\).*'
$alltsFiles = dir *.ts -Recurse | Select-String -Pattern $pattern
$groups = $alltsFiles | group path
foreach($group in $groups){
    $content = Get-Content $group.Name -Raw
    if($content){
        #$lines = $group.Group.Line | %{ if($_ -match $pattern){ "Import {$($Matches['module'])} from $($Matches['target']);" }}
        foreach($grp in $group.Group){
            $line = $grp.Line
            $replace = "import {$($grp.Matches[0].Groups["module"].Value)} from $($grp.Matches[0].Groups["target"].Value);"
            $content = $content.Replace($line,$replace)
        }
    }
    Write-Verbose $group.Name -Verbose
    $content | Set-Content -Path $group.Name -Encoding UTF8
}



return
#$filetofix = dir .\ExchangeWebService.ts
$uri1 = New-Object System.Uri -ArgumentList $filetofix.FullName
if($filetofix -ne $null){
    $insercontent = @()
    $allfiles = dir *.ts -Recurse;
    $allfiles | ?{!$_.FullName.EndsWith(".d.ts")} | ?{!$_.BaseName.endsWith("Attribute")} | sort BaseName | %{      
            
        #Write-Verbose $_.symbol -Verbose
        $symfile = $_.BaseName # dir ($_ + ".ts") -Recurse
        if($symfile){
                
            #Write-Verbose $uri1 -Verbose
            #Write-Verbose $uri2 -Verbose
            #$uri2 = New-Object System.Uri -ArgumentList $symfile.FullName
            $importfile = $_.FullName.Replace("\","/").Replace("D:/dr/lgh/ews-javascript-api/src/js",".") #  $uri1.MakeRelative($uri2).replace(".ts","")
            #if(!$importfile.StartsWith(".")){$importfile = "./" + $importfile}
            $importstatement = "// import {" + $symfile + "} from """ + $importfile.Replace(".ts","") + """;"
            $importstatement += "`r`n// export {" + $symfile + "}"
            #Write-Verbose ($filetofix.FullName + " | " + $importstatement) -Verbose
            #Write-Verbose ($importstatement) -Verbose
            $insercontent += $importstatement
        }
        else
        {
            Write-Verbose ($filetofix.FullName + " | " +  $_.symbol) -Verbose
        }
    }
}


$exports = "export {"
$allfiles.BaseName | %{$exports += "`r`n// $_,"}
$exports += "`r`n};"
