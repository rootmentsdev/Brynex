# Google Sheets Integration Setup Guide

Follow these steps to connect your contact form to Google Sheets:

## Step 1: Create Google Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1DoSibbCsQ6JxVvCJbNl_eVov28G3ohn-uPIQ-bzjJn0/edit?gid=0#gid=0

2. Click on **Extensions** → **Apps Script** (or go to https://script.google.com)

3. Delete any existing code and paste this script:

```javascript
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
```

## Step 2: Set Up Sheet Headers (Optional)

If your sheet doesn't have headers, run the `onOpen()` function once:
1. In Apps Script editor, select `onOpen` from the function dropdown
2. Click the Run button (▶️)
3. Authorize the script when prompted

Or manually add these headers in Row 1:
- Column A: Timestamp
- Column B: Full Name
- Column C: Email
- Column D: Subject
- Column E: Message

## Step 3: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**

2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**

3. Configure the deployment:
   - **Description**: Contact Form Handler (or any name you prefer)
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone (this allows your website to submit data)

4. Click **Deploy**

5. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

## Step 4: Update Your React Code

1. Open `frontend/src/pages/ContactPage.jsx`

2. Find this line (around line 17):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
   ```

3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE` with your Web App URL from Step 3

4. Save the file

## Step 5: Test the Integration

1. Start your React development server
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your Google Sheet - you should see the new entry appear immediately

## Troubleshooting

- **CORS Errors**: The script uses `no-cors` mode, so you won't see response errors in the browser console. Check the Google Sheet to verify data is being saved.

- **Permission Errors**: Make sure the Web App is deployed with "Anyone" access

- **Data Not Appearing**: 
  - Check that the sheet is not protected/read-only
  - Verify the script has permission to edit the sheet
  - Check Apps Script execution logs (View → Logs)

- **Slow Response**: Google Apps Script has execution time limits. For faster responses, consider:
  - Using a service like Zapier or Make.com
  - Setting up a backend API (Node.js/Express) that writes to Google Sheets API
  - Using a dedicated form service like Formspree or Netlify Forms

## Alternative: Using Google Sheets API (Faster but more complex)

For faster submissions, you can use the Google Sheets API directly with a backend service. This requires:
- OAuth 2.0 setup
- Backend server (Node.js/Express)
- Google API credentials

Let me know if you'd like help setting up this alternative approach!

