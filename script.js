// ===============================
// DOCUMENT FILTER
// ===============================

function filterDocuments() {

    let filter = document.getElementById("documentFilter").value;

    let documents = document.querySelectorAll(".document-card");

    documents.forEach(function(documentCard) {

        let type = documentCard.getAttribute("data-type");

        if (filter === "all" || type === filter) {

            documentCard.style.display = "block";

        } else {

            documentCard.style.display = "none";

        }

    });
}


// ===============================
// DOCUMENT DETAILS
// ===============================

function showDocument(documentName) {

    alert(
        "Document: " +
        documentName +
        "\n\nThis is a historical archive document."
    );

}


// ===============================
// OPEN IMAGE
// ===============================

function openImage(imageSource) {

    let modal = document.getElementById("imageModal");

    let largeImage = document.getElementById("largeImage");

    largeImage.src = imageSource;

    modal.style.display = "flex";

}


// ===============================
// CLOSE IMAGE
// ===============================

function closeImage() {

    let modal = document.getElementById("imageModal");

    modal.style.display = "none";

}


// ===============================
// CONTACT FORM
// ===============================

function submitForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let subject = document.getElementById("subject").value;


    if (
        name === "" ||
        email === "" ||
        subject === ""
    ) {

        alert("Please fill in all required fields.");

        return;

    }


    alert(
        "Thank you " +
        name +
        "! Your message has been submitted successfully."
    );


    document.getElementById("contactForm").reset();

}