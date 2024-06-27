import Text "mo:base/Text";
module { 
 public func get_html() : Blob { return Text.encodeUtf8("<!DOCTYPE html>"
#"<html lang=\"en\">"
#"<head>"
#"    <meta charset=\"UTF-8\">"
#"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
#"    <title>My Space Boots</title>"
#"    <style>"
#"        body {"
#"            font-family: Arial, sans-serif;"
#"            text-align: center;"
#"            background-color: #f0f0f0;"
#"            margin: 0;"
#"            padding: 20px;"
#"        }"
#"        .boots-container {"
#"            background-color: white;"
#"            border-radius: 10px;"
#"            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"
#"            display: inline-block;"
#"            margin: 20px;"
#"            padding: 20px;"
#"            width: 300px;"
#"        }"
#"        .boots-container img {"
#"            max-width: 100%;"
#"            border-radius: 10px;"
#"        }"
#"        .boots-name {"
#"            font-size: 24px;"
#"            margin-top: 10px;"
#"        }"
#"    </style>"
#"</head>"
#"<body>"
#"    <div class=\"boots-container\">"
#"        <img src=\"plug-logo.png\" alt=\"Space Boots\">"
#"        <div class=\"boots-name\">My Space Boots</div>"
#"    </div>"
#"</body>"
#"</html>"
#"");
 };
}