
$type = String;
$type.__typeName = 'String';
$type.__class = true;

$prototype = $type.prototype;
$prototype.endsWith = function String$endsWith(suffix) {
	/// <summary>Determines whether the end of this instance matches the specified string.</summary>
	/// <param name="suffix" type="String">A string to compare to.</param>
	/// <returns type="Boolean">true if suffix matches the end of this instance; otherwise, false.</returns>
	return (this.substr(this.length - suffix.length) === suffix);
}

$prototype.startsWith = function String$startsWith(prefix) {
	/// <summary >Determines whether the beginning of this instance matches the specified string.</summary>
	/// <param name="prefix" type="String">The String to compare.</param>
	/// <returns type="Boolean">true if prefix matches the beginning of this string; otherwise, false.</returns>
	return (this.substr(0, prefix.length) === prefix);
}

$prototype.trim = function String$trim() {
	/// <summary >Removes all leading and trailing white-space characters from the current String object.</summary>
	/// <returns type="String">The string that remains after all white-space characters are removed from the start and end of the current String object.</returns>
	return this.replace(/^\s+|\s+$/g, '');
}

$prototype.trimEnd = function String$trimEnd() {
	/// <summary >Removes all trailing white spaces from the current String object.</summary>
	/// <returns type="String">The string that remains after all white-space characters are removed from the end of the current String object.</returns>
	return this.replace(/\s+$/, '');
}

$prototype.trimStart = function String$trimStart() {
	/// <summary >Removes all leading white spaces from the current String object.</summary>
	/// <returns type="String">The string that remains after all white-space characters are removed from the start of the current String object.</returns>
	return this.replace(/^\s+/, '');
}

$type.format = function String$format(format, args) {
	/// <summary>Replaces the format items in a specified String with the text equivalents of the values of   corresponding object instances. The invariant culture will be used to format dates and numbers.</summary>
	/// <param name="format" type="String">A format string.</param>
	/// <param name="args" parameterArray="true" mayBeNull="true">The objects to format.</param>
	/// <returns type="String">A copy of format in which the format items have been replaced by the   string equivalent of the corresponding instances of object arguments.</returns>
	return String._toFormattedString(false, arguments);
}

$type._toFormattedString = function String$_toFormattedString(useLocale, args) {
	var result = '';
	var format = args[0];

	for (var i = 0; ;) {
		// Find the next opening or closing brace
		var open = format.indexOf('{', i);
		var close = format.indexOf('}', i);
		if ((open < 0) && (close < 0)) {
			// Not found: copy the end of the string and break
			result += format.slice(i);
			break;
		}
		if ((close > 0) && ((close < open) || (open < 0))) {

			if (format.charAt(close + 1) !== '}') {
				throw new Error('format stringFormatBraceMismatch');
			}

			result += format.slice(i, close + 1);
			i = close + 2;
			continue;
		}

		// Copy the string before the brace
		result += format.slice(i, open);
		i = open + 1;

		// Check for double braces (which display as one and are not arguments)
		if (format.charAt(i) === '{') {
			result += '{';
			i++;
			continue;
		}

		if (close < 0) throw new Error('format stringFormatBraceMismatch');


		// Find the closing brace

		// Get the string between the braces, and split it around the ':' (if any)
		var brace = format.substring(i, close);
		var colonIndex = brace.indexOf(':');
		var argNumber = parseInt((colonIndex < 0) ? brace : brace.substring(0, colonIndex), 10) + 1;

		if (isNaN(argNumber)) throw new Error('format stringFormatInvalid');

		var argFormat = (colonIndex < 0) ? '' : brace.substring(colonIndex + 1);

		var arg = args[argNumber];
		if (typeof (arg) === "undefined" || arg === null) {
			arg = '';
		}

		// If it has a toFormattedString method, call it.  Otherwise, call toString()
		if (arg.toFormattedString) {
			result += arg.toFormattedString(argFormat);
		}
		else if (useLocale && arg.localeFormat) {
			result += arg.localeFormat(argFormat);
		}
		else if (arg.format) {
			result += arg.format(argFormat);
		}
		else
			result += arg.toString();

		i = close + 1;
	}

	return result;
}

