var div_bg;
var h1_pageTitle;
var p_desc;
var p_author;

function master()
{
	preInitialization();
	initialization();
}

function preInitialization()
{
	div_bg = document.getElementById("bg");
}

function initialization()
{
	resize();
	detectLanguage();
}

function changeThemeColor(color)
{
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", color);
}