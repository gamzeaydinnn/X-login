Of course! Here is a detailed README.md file in English that explains your Playwright script step-by-step.

X.com (Twitter) DM Automation with Playwright
This project contains an end-to-end test script built with Playwright that automates the entire process of logging into an X.com (formerly Twitter) account, sending a Direct Message (DM) to a specific user, and verifying the action.

The script uses environment variables to securely handle user credentials and relies on data-testid attributes for robust element selection.

✨ Test Scenario Flow
The test script performs the following actions in sequence:

Launch and Navigate:

Opens a new browser window.

Navigates to https://x.com.

Login Process:

Waits for the main "Log in" button on the homepage to be visible and then clicks it.

Fills in the email address from the .env file.

Clicks the "Next" button.

If prompted, it fills in the username from the .env file.

Clicks "Next" again.

Fills in the password from the .env file.

Clicks the final "Log in" button to complete authentication.

Navigate to Direct Messages:

After a successful login, it waits for the main app navigation bar to appear.

It clicks on the "Direct Messages" link to open the inbox.

Send a New Message:

The script first records the initial number of conversations present in the inbox.

It clicks the "New message" button.

In the search box, it types a hardcoded username (BolukbasK9539) to find the recipient.

It clicks on the user from the search results.

It proceeds by clicking the "Next" button to create the conversation.

It types a predefined message ("mrb") into the message composition box.

Finally, it clicks the "Send" button to dispatch the message.

Verification:

After sending the message, the script waits for the conversation list to be visible again.

It then recounts the total number of conversations in the inbox to confirm that the new conversation has been created or an existing one has been updated. The initial and final counts are printed to the console.

🛠️ Tech Stack
Automation Framework: Playwright

Language: JavaScript

Runtime: Node.js

Environment Variables: dotenv for managing credentials securely.

 Installation and Setup
To run this project on your local machine, please follow these steps:

Clone the Repository:

Bash

git clone <your-repository-url>
cd <project-folder>
Install Dependencies:
Install the necessary Node.js packages defined in package.json.

Bash

npm install
Install Playwright Browsers:
This command downloads the browser binaries required by Playwright.

Bash

npx playwright install
Create Environment File:
The script requires a .env file to store your login credentials securely. Create a file named .env in the root of the project directory.

Important: The .env file should never be committed to Git. Make sure your .gitignore file includes a line with .env.

Create a file named .env.example to serve as a template for others:

Kod snippet'i

# X.com (Twitter) Login Credentials
# Fill these variables with your own account information
MAIL="your-email@example.com"
USERNAMEE="your_x_username"
PASSWORD="your_password"
Now, create your own .env file by copying the template and filling it with your actual credentials.

▶ How to Run the Test
You can run the automation script using the following commands from your terminal:

Run in Headless Mode (no browser UI):

Bash

npx playwright test
Run in Headed Mode (to watch the test run live):

Bash

npx playwright test --headed
