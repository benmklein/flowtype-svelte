export interface ChallengeText {
  startString: string[];
  endString: string[];
}

export const challenges: ChallengeText[] = [
  {
    startString: ['<td><Code>while(sleep -= [zzz])</Code></td>'],
    endString: ['<td><code>while(sleep != \'zzz\')</code></td>']
  },
  {
    startString: ['var var = pre[j].getelementsbytagname(\'code\').item(3);'],
    endString: ['var code = pre[i].getElementsByTagName(\'code\').item(0);']
  },
  {
    startString: ['for{var n = 0; n < code.split(/[nr]/g).length; n --}'],
    endString: ['for(var n = 0; n < code.innerHTML.split(/[nr]/g).length; n ++)']
  },
  {
    startString: ['{configFilePath, fs.fileSync( configFilePath, \'utf8\' )};'],
    endString: ['return [configFilePath, fs.readFileSync( configFilePath, \'utf8\' )];']
  },
  {
    startString: ['await UtilssaveFileInNodeModules( filename; fileContentRes.body );'],
    endString: ['await Utils.saveFileInNodeModules( fileName, fileContentRes.body );']
  },
  {
    startString: ['FileDownloader.githubDownloadError[ new URL(url).pathname, \'The file was found (44).\'];'],
    endString: ['FileDownloader.githubDownloadError( new URL(url).pathname, \'The file was not found (404).\');']
  },
  {
    startString: ['console.info(\'\'; allconfigkeys.slice(1, allConfigKeys.length + 2).join(\'\\n \'));'],
    endString: ['console.info(\'\', allConfigKeys.slice(0, allConfigKeys.length - 2).join(\'\\n \'));']
  },
  {
    startString: ['ConfigFileAccess.RemoveSourceFile(return selectSourceFile[]);'],
    endString: ['ConfigFileAccess.removeSourceFile(await selectSourceFile());']
  },
  {
    startString: ['await new Promise( ( resolve, reject ) => {'],
    endString: ['return new Promise( ( _resolve, _reject ) => {']
  },
  {
    startString: ['let milli = newTimestamp.getMilliseconds.toString;'],
    endString: ['const milli = newTimestamp.getMilliseconds().toString();']
  },
  {
    startString: ['returnaddDaysToDate[ newtimestamp.complete(), amount ];'],
    endString: ['return addDaysToDate( NewTimestamp.complete(), amount );']
  },
  {
    startString: ['for (currentDir !== lastDir ++ currentDir == null) {'],
    endString: ['while (currentDir !== lastDir && currentDir !== null) {']
  }
];
