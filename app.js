window.addEventListener("load", () => {
	//curtain
	const curtain = document.querySelector(".modal-bg");
	//modals
	const projectModal = document.querySelector(".project-modal-bg");
	const modal = document.querySelector(".mobile-modal-bg");

	//logo
	const logo = document.querySelector(".logo");

	//buttons
	const showModal = document.querySelector(".hamburger");
	const closeModal = document.querySelector(".close");
	const pledgeSelect = document.querySelector(".project-cta");
	const projectClose = document.querySelector(".close-project-modal");
	const bambooSelect = document.querySelector(".bamboo-selection");
	const blackEditionSelect = document.querySelector(".black-edition-selection");
	const complete = document.querySelector(".complete-btn");
	const continueBtn = document.querySelectorAll(".continue");
	const bookmarkBtn = document.querySelector(".bookmark-cta");

	//radio buttons
	const selectionBtn = document.getElementsByName("select");
	const disabledOption = document.getElementById("option-4");

	disabledOption.disabled = true;

	bookmarkBtn.addEventListener("click", () => {
		console.log(bookmarkBtn.childNodes[1]);
		bookmarkBtn.childNodes[1].style.animation = "swipe 600ms ease";
		bookmarkBtn.childNodes[2].style.color = "hsl(176, 72%, 28%)";
		bookmarkBtn.childNodes[1].childNodes[1].childNodes[1].style.fill =
			"hsl(176, 72%, 28%)";
		bookmarkBtn.childNodes[1].childNodes[1].childNodes[3].style.fill = "white";
	});

	for (let i = 0; i < continueBtn.length; i++) {
		continueBtn[i].addEventListener("click", () => {
			complete.parentElement.parentElement.style.display = "block";
			console.log(curtain);

			curtain.style.zIndex = "4";
		});
	}

	complete.addEventListener("click", () => {
		complete.parentElement.parentElement.style.display = "none";
		window.location.reload();
	});

	pledgeSelect.addEventListener("click", () => {
		for (let i = 0; i < selectionBtn.length; i++) {
			selectionBtn[i].checked = false;
		}
		projectModal.style.display = "block";
		curtain.style.display = "block";
	});

	bambooSelect.addEventListener("click", () => {
		for (let i = 0; i < selectionBtn.length; i++) {
			selectionBtn[1].checked = true;
			selectionBtn[1].parentElement.childNodes[11].childNodes[3].style.display =
				"flex";
		}
		projectModal.style.display = "block";
		curtain.style.display = "block";
	});

	blackEditionSelect.addEventListener("click", () => {
		for (let i = 0; i < selectionBtn.length; i++) {
			selectionBtn[2].checked = true;
			selectionBtn[2].parentElement.childNodes[13].childNodes[3].style.display =
				"flex";
		}
		projectModal.style.display = "block";
		curtain.style.display = "block";
	});

	for (let i = 0; i < selectionBtn.length; i++) {
		selectionBtn[i].addEventListener("click", () => {
			selectionBtn[i].parentElement.childNodes[9].childNodes[3].style.display =
				"none";
			selectionBtn[i].parentElement.childNodes[11].childNodes[3].style.display =
				"none";
			selectionBtn[i].parentElement.childNodes[13].childNodes[3].style.display =
				"none";
			selectionBtn[i].parentElement.childNodes[15].childNodes[3].style.display =
				"none";
			if (selectionBtn[i].checked) {
				if (selectionBtn[i].value == 1) {
					selectionBtn[
						i
					].parentElement.childNodes[9].childNodes[3].style.display = "flex";
				} else if (selectionBtn[i].value == 2) {
					selectionBtn[
						i
					].parentElement.childNodes[11].childNodes[3].style.display = "flex";
				} else if (selectionBtn[i].value == 3) {
					selectionBtn[
						i
					].parentElement.childNodes[13].childNodes[3].style.display = "flex";
				}
			}
		});
	}

	closeModal.addEventListener("click", () => {
		modal.style.display = "none";
		showModal.style.visibility = "visible";
		logo.style.visibility = "visible";
		curtain.style.zIndex = "-1";
	});

	showModal.addEventListener("click", () => {
		modal.style.display = "block";
		showModal.style.visibility = "hidden";
		logo.style.visibility = "hidden";
		curtain.style.display = "block";
	});

	projectClose.addEventListener("click", () => {
		projectModal.style.display = "none";
		curtain.style.display = "none";
	});
});
