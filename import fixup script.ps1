return

$content = Get-Content ..\..\errors.txt
$lines = $content | ?{$_.contains("TS2304")}
$dupli = $content | ?{$_.contains("TS2300")}
$ts2305 = $content | ?{$_.contains("TS2305")}





#src/js/Attributes/RequiredServerVersionAttribute.ts(3,11): error TS2304: Cannot find name 'ExchangeVersion'.

$fixes = @()


$lines |%{if($_ -match '(\A(?<file>.*)\()([^'']+).* (.(?<target>.*)[^.]+)') {
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



#| ?{$_.filetofix.contains("AddressEntityCollection")}

return;$fixes  | group filetofix |  %{
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

        $filecontent = Get-Content $filetofix.FullName
        $filecontent = $insercontent + $filecontent
        $filecontent | Set-Content -Path $filetofix 
        #$filecontent
    }
}




$ff = $fixes  | group filetofix |  %{
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
               #Write-Verbose ($filetofix.FullName + " | " + $importstatement) -Verbose
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