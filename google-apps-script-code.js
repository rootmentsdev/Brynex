// Copy this entire code into your Google Apps Script editor

// Handle GET requests (for testing/verification)
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'success',
    'message': 'Google Apps Script is working! Use POST to submit form data.',
    'instructions': 'This endpoint accepts POST requests with form data: fullName, email, subject, message'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Handle POST requests (form submissions)
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Handle FormData (form-urlencoded) or JSON
    let data;
    if (e.parameter) {
      // FormData submission (URL-encoded)
      data = e.parameter;
    } else if (e.postData && e.postData.contents) {
      // JSON submission
      data = JSON.parse(e.postData.contents);
    } else {
      throw new Error('No data received');
    }
    
    // Get the current timestamp
    const timestamp = new Date();
    
    // Append the data to the sheet
    // Format: [Timestamp, Full Name, Email, Subject, Message]
    sheet.appendRow([
      timestamp,
      data.fullName || '',
      data.email || '',
      data.subject || '',
      data.message || ''
    ]);
    
    // Return success response (CORS enabled)
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Set up headers in the sheet
function onOpen() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const headers = ['Timestamp', 'Full Name', 'Email', 'Subject', 'Message'];
  
  // Check if headers already exist
  if (sheet.getRange(1, 1).getValue() !== 'Timestamp') {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }
}

