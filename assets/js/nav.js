window.addEventListener('load', function () {
	document.getElementById('menu').addEventListener('click', function (e) {
		e.preventDefault()

		if (document.getElementById('stuff').classList.contains('toggled')) {
			document.getElementById('stuff').classList.remove('toggled')
			document.getElementById('stuff').className ='inactive'
		} else {
			document.getElementById('stuff').className = 'toggled'
		}
	})
})