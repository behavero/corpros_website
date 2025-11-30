# Firebase Setup Guide

This guide will help you set up Firebase for the CORPROS GROUP website contact form.

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard:
   - Enter project name: `corpros-group` (or your preferred name)
   - Enable/disable Google Analytics (optional)
   - Click "Create project"

## Step 2: Enable Firestore Database

1. In your Firebase project, go to **Firestore Database** in the left sidebar
2. Click "Create database"
3. Choose **Start in test mode** (for development)
4. Select a location (choose closest to your users)
5. Click "Enable"

### Security Rules (Important for Production)

For production, update your Firestore security rules to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /leads/{document=**} {
      allow create: if request.resource.data.keys().hasAll(['firstName', 'lastName', 'company', 'email', 'city', 'companySize', 'profile', 'message', 'submittedAt']);
      allow read, update, delete: if false; // Only admins can read/update/delete
    }
  }
}
```

## Step 3: Get Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon `</>` to add a web app
5. Register your app:
   - App nickname: `Corpros Web`
   - Check "Also set up Firebase Hosting" (optional)
   - Click "Register app"
6. Copy the Firebase configuration object

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in the root of `corpros-web/` directory
2. Add your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
```

3. Replace the values with your actual Firebase configuration

## Step 5: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out the form and submit
4. Check your Firestore database in Firebase Console
5. You should see a new document in the `leads` collection

## Troubleshooting

### Form submissions not saving

- Check browser console for errors
- Verify all environment variables are set correctly
- Ensure Firestore is enabled and in test mode (for development)
- Check that the `leads` collection exists (it will be created automatically on first submission)

### Environment variables not loading

- Make sure `.env.local` is in the root of `corpros-web/` directory
- Restart your Next.js development server after adding/changing environment variables
- Variables must start with `NEXT_PUBLIC_` to be accessible in the browser

### Firebase initialization errors

- Verify your Firebase configuration values are correct
- Check that your Firebase project is active
- Ensure Firestore is enabled in your Firebase project

## Production Deployment

Before deploying to production:

1. Update Firestore security rules (see Step 2)
2. Add your production domain to Firebase authorized domains
3. Consider setting up Firebase Hosting for optimal performance
4. Enable Firebase Analytics (optional)

## Using Firebase MCP (Optional)

If you want to use Firebase MCP tools:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize Firebase in your project: `firebase init`
4. Select Firestore when prompted




