# Lost in Translation
React app that translates text into sign language and saves translations to localStorage. 

## Running
After cloning the repo, run 
```
 npm install && npm run start 
 ``` 
to start a local server with the app
## Features
- Translates strings into sign language signs
- "login" system that saves username and past translations (up to a maximum of 10) to localStorage
- Ability to log out and clear localStorage
- Profile page where old translations can be seen
- Routing with guarded routes

## Views
The app is split up into four views with:
```
LoginView => TranslationView => ProfileView (optionally back to TranslationView) => LogoutView
```

### LoginView
```
<LoginView>
    <main>
        <form></form>
    </main>
</LoginView>
```
LoginView is what the user will be redirected to if they are not logged in. The view itself consist of a simple input box and submit "button". On submitting the form, the component will
save the username to localStorage as well as sending it to its parent. After this is done, the user is navigated to '/'. This will trigger a check in the ProtectedComponent HOC which will read the username from localStorage and allow the user to continue to TranslationView where finally the user state is set properly. 

### TranslationView
```
<TranslationView>
    <main>
        <form></form>
        <TranslationDisplay />
    </main>
</TranslationView>
```
TranslationView is the main part of the app. it displays an input and a TranslationDisplay which is capable of displaying a string of text as sign language images. New translations are sent to the parent component where they are saved in component state and to localStorage.

### ProfileView
```
<ProfileView>
    <main>
    <Link /><Link />
    <ul>
        <li />
        .
        .
        .
    </ul>
    <TranslationDisplayComponent />
    </main>
</ResultView>
```

ProfileView allow the user to log out and to see the translation history.
A TranslationDisplayComponent is used again to display the translated "text".
Logging out is achieved by sending the user to '/logout' where localStorage is cleared
as well as the app state. 

