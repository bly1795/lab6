'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	var result = $.get("/project/" + idNumber, projectCallback);

}

function projectCallback(result) {
	var title = result['title'];
	var date = result['date'];
	var projImg = result['image'];
	var summary = result['summary'];
	var htmlStr = '<p>' + title + '</p>' + '<p>' + date + '</p>' + '<div class="thumbnail">' + '<img src="' + projImg + '"class="img">' + summary;
	$('#project' + result['id'] + ' .details').html(htmlStr);
	console.log(title);
}