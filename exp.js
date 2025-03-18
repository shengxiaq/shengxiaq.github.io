	function getSourceId(){
		let id = 872444850;
		let random = Math.floor(Math.random() * 10000) * 5;
		id -= random;
		return id;
	}

	function sendComment(source_id) {
		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://uis.mp.sohu.com/comment/api/comments/', true);
		xhr.withCredentials = true;
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('topic_title=%E2&topic_url=https%3A%2F%2Fwww.sohu.com%2F&reply_id=&topic_id=33045961&attachment_urls=&content=666&media_id=&source_id=mp_' + source_id + '&channel_id=&requestId=');

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				let json = JSON.parse(xhr.responseText);
				if (json.code == 200) {
					console.log('评论提交成功');
				}
			}
		};
	}

	sendComment(getSourceId());
