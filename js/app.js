_.templateSettings.interpolate = /{([\s\S]+?)}/g;


function someHTMLPage(data) {

	document.body.innerHTML = [

	// this is the main div class wrapped around entire code
		'<div class="main">',
		'<div id="left-column">',
		'<img src=',
		data.avatar_url,
		'>',
		'<h1>',
		data.name,
		'</h1>',
		'<h2> blog:',
		data.blog,
		'</h2>',
		'<h3> Location: ',
		data.location,
		'</h3>',
		'<h4> Email:',
		data.email,
		'</h4>',
		'<h4> Avatar URL:',
		data.avatar_url,
		'</h4>',
		'<h4> HTML URL:',
		data.html_url,
		'</h4>',
		'</div>',
		'</div>'
	].join('');


