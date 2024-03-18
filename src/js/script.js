
const gpickr = new GPickr({
	el: '.gpickr',
	stops: [
		['rgb(255,132,109)', 0],
		['rgb(255,136,230)', 1]
	]
});


gpickr.on('change', instance => {
	const preview = document.querySelector("#blockSize");
	preview.style.background = instance.getGradient();
});



$('#summernote').summernote({
	height: 150,
	focus: true,
	fontSizes: ['2', '4', '6', '8', '9', '10', '11', '12', '14', '18', '24', '36', '48', '64', '82', '100', '120', '150', '175', '200'],
	lineHeights: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.8', '1.0', '1.2', '1.4', '1.5', '2.0', '3.0'],
	callbacks: {
		onChange: function () {
			var markup = $('.click2edit').summernote('code');
			// $('.resultat').summernote('destroy');
			// console.log(markup);
			document.getElementById('ruseltText').innerHTML = markup;
		}
	},
	toolbar: [
		['style', ['bold', 'italic', 'underline', 'clear']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		['fontsize', ['fontsize']],
		['fontname', ['fontname']],
		['height', ['height']],
		['color', ['color']],
		['para', ['ul', 'ol', 'paragraph']],
		['picture', ['picture']],
		['table', ['table']],
		['undo', ['undo']],
		['redo', ['redo']],
	],
});

// $('#summernote').summernote({

// });
$('#summernote').summernote('justifyCenter');


function showShopColor() {
	const shopColorPicker = document.querySelector("shop-color-picker");
	const displayShopColor = shopColorPicker.style.display;
	if (displayShopColor == 'block') {
		shopColorPicker.style.display = 'none';
	} else {
		shopColorPicker.style.display = 'block';
	};
};


function showGradient() {
	const gradient = document.getElementById('showgradient');
	const displayGradient = gradient.style.display;
	if (displayGradient == 'block') {
		gradient.style.display = 'none';
	} else {
		gradient.style.display = 'block';
	};
};


var inputHeight = document.getElementById('height');
var inputWidth = document.getElementById('width');
var blockSize = document.getElementById('blockSize');

function exsempleOne() {
	blockSize.style.width = 80 + "px";
	blockSize.style.height = 80 + "px";
	inputHeight.value = 80;
	inputWidth.value = 80;
	const preview = document.querySelector("#blockSize");
	preview.style.background = 'rgba(4, 140, 77, 1)';
	var text = '<br /><p style="color: white; font-size: 16px; text-align: center; font-weight: bold; line-height: 0.5; margin-top: -6px;">PIANO</p><p style="color: white; font-size: 16px; text-align: center; line-height: 0.5;">SAD</p>';
	$('#summernote').summernote('code', text);
};

function exsempleTwo() {
	blockSize.style.width = 210 + "px";
	blockSize.style.height = 125 + "px";
	inputHeight.value = 125;
	inputWidth.value = 210;
	const preview = document.querySelector("#blockSize");
	preview.style.background = 'linear-gradient(69deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
	var text = '<div style="text-align: center; line-height: 0.2;"><br></div><div style="text-align: center; line-height: 0.8;"><br></div><div style="text-align: center; line-height: 0.2;"><b><font color="#0000ff"><span style="font-size: 24px;">СЛАВА</span></font><span style="font-size: 24px;"> </span><font color="#ffff00"><span style="font-size: 24px;">УКРАЇНІ!</span></font></b></div><div style="text-align: center; line-height: 0.2;"><font color="#ffff00"><span style="font-size: 18px;"><br></span></font><br></div><div style="text-align: center;"><img style="width: 50px;" src="data:image/png;base64,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" data-filename="1.png"><font color="#ffff00"><span style="font-size: 18px;"><br></span></font></div>'
	$('#summernote').summernote('code', text);
};

function exsempleThree() {
	blockSize.style.width = 380 + "px";
	blockSize.style.height = 170 + "px";
	inputHeight.value = 170;
	inputWidth.value = 380;
	const preview = document.querySelector("#blockSize");
	preview.style.background = 'transparent';
	var text = '<div style="text-align: right; line-height: 0.6;"><font color="#ce0000"><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Як дитиною, бувало,&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Упаду собі на лихо,&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">То хоч в серце біль доходив,&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Я собі вставала тихо.&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">"Що, болить?" – мене питали,&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Але я не признавалась –&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Я була малою горда, –&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Щоб не плакать, я сміялась.&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">А тепер, коли для мене&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Жартом злим кінчиться драма&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">І от-от зірватись має&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Гостра, злобна епіграма, –&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Безпощадній зброї сміху&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Я боюся піддаватись,&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">І, забувши давню гордість,&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">Плачу я, щоб не сміятись.&nbsp;</span><span style="font-family: Georgia, &quot;Times New Roman&quot;, serif; font-size: 18px; text-align: justify;">2.02.1897</span></font><br></div><p></p>';
	$('#summernote').summernote('code', text);
};

function showTempletes() {
	console.log('show');
	var templatesInfa = document.getElementById('templatesInfa');
	templatesInfa.style.display = templatesInfa.style.display  == 'none' ? 'flex': 'none';
};

inputHeight.addEventListener('input', function () {
	blockSize.style.height = Number(inputHeight.value) + "px";
});

inputWidth.addEventListener('input', function () {
	blockSize.style.width = Number(inputWidth.value) + "px";
});


function changeFonColor() {
	const preview = document.querySelector("#blockSize");
	preview.style.background = 'transparent';

};

function changeFonOneColor() {
	const preview = document.querySelector("#blockSize");
	preview.style.background = '#FFC800';
};

function changeFonTwoColor() {
	const preview = document.querySelector("#blockSize");
	preview.style.background = '#00C8FF';
};


function changeFon() {
	const preview = document.querySelector("#blockSize");
	preview.style.background = 'linear-gradient(90deg, rgba(0,18,36,1) 0%, rgba(0,116,255,0.9976365546218487) 100%)';
};

function changeFonOne() {
	const preview = document.querySelector("#blockSize");
	preview.style.background = 'linear-gradient(69deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)';
};

function changeFonTwo() {
	const preview = document.querySelector("#blockSize");
	preview.style.background = 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)';
};

function changeFonThree() {
	const preview = document.querySelector("#blockSize");
	preview.style.background = 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)';
};


function screenshot() {
	const captureElement = document.querySelector("#blockSize");
	html2canvas(captureElement, {
		allowTaint: true,
		useCORS: true,
		backgroundColor: null,
		scrollY: -window.scrollY,
		scrollX: 0
	}).then((canvas) => {
		const imageData = canvas.toDataURL("image/png;");
		const link = document.createElement("a");
		link.setAttribute("download", "Image.png");
		link.setAttribute("href", imageData);
		link.click();
	});
};




document.getElementById('myFile').onchange = function () {
	var url = URL.createObjectURL(this.files[0]);
	const preview = document.querySelector("#blockSize");
	preview.style.background = "url(" + url + ")";
}

function changeFonImage() {
	const preview = document.querySelector("#blockSize");
	preview.style.background = "url('./src/image/backgraund1.png')";
};

function changeFonOneImage() {
	const preview = document.querySelector("#blockSize");
	preview.style.background = "url('./src/image/backgraund2.png')";
};

function changeFonThreeImage() {
	const preview = document.querySelector("#blockSize");
	preview.style.background = "url('./src/image/backgraund4.png')";
};




