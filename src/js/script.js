
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
	height: 220,
	focus: true,
	fontSizes: ['2', '4', '6', '8', '9', '10', '11', '12', '14', '18', '24', '36', '48' , '64', '82', '100', '120', '150', '175', '200'],
	callbacks: {
		onChange: function () {
			var markup = $('.click2edit').summernote('code');
			$('.resultat').summernote('destroy');
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
		scrollY: -window.scrollY
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




