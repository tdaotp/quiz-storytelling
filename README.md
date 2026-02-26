# Quiz Storytelling Documentation

## GitHub Pages Setup
1. **Navigate to the repository settings:**  
   Go to the `Settings` tab of your repository.

2. **Find the GitHub Pages section:**  
   Scroll down to the `GitHub Pages` section.

3. **Choose a source branch:**  
   Select the branch you want to use for GitHub Pages. Generally, this is the `main` branch. You may also select a specific folder if your site is located in a sub-directory.

4. **Save your changes:**  
   Click the `Save` button to apply the changes.  

5. **Access your site:**  
   Visit `https://<your-username>.github.io/<your-repository>` to see your site live.

## Formspree Configuration
1. **Sign up or log in to Formspree:**  
   Go to [Formspree](https://formspree.io) to create an account or log in.

2. **Create a new form:**  
   Click on `Create Your First Form` or the `New Form` button.

3. **Configure your form settings:**  
   - Enter the email address where you want to receive form submissions.
   - Customize other settings as needed.

4. **Copy the Formspree endpoint:**  
   After creating the form, you will receive an endpoint URL. This URL will be used to send form submissions.

5. **Integrate Formspree with your HTML form:**  
   - In your HTML file, update the `action` attribute of your form tag to the Formspree endpoint you copied.
   - For example:
     ```html
     <form action="YOUR_FORMSPREE_ENDPOINT" method="POST">
         <input type="text" name="name" required>
         <input type="email" name="email" required>
         <button type="submit">Submit</button>
     </form>
     ```

6. **Test your form:**  
   Submit the form to ensure that the submissions are being received successfully at your email.