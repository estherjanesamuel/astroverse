# Build your first Astro Blog
In this tutorial, you’ll learn Astro’s key features by building a fully-functioning blog, from zero to full launch! 🚀

Along the way, you’ll:

- Set up your development environment
- Create pages and blog posts for your website
- Build with Astro components
- Query and work with local files
- Add interactivity to your site
- Deploy your site to the web

Want a preview of what you’re going to build? You can view the final project on [GitHub](https://github.com/withastro/blog-tutorial-demo) or open a working version in an online coding environment such as [IDX](https://idx.google.com/import?url=https:%2F%2Fgithub.com%2Fwithastro%2Fblog-tutorial-demo%2F) or [StackBlitz](https://stackblitz.com/github/withastro/blog-tutorial-demo/tree/complete?file=src%2Fpages%2Findex.astro).

>Note
>If you would rather start exploring Astro with a pre-built Astro site, you can visit [astro.new](https://astro.new) and 
>choose a starter template to open and edit in an online editor.

# About this Tutorial

What do I need to know to get started?
If you have some basic familiarity with HTML, Markdown, CSS, and a little JavaScript, then you’re totally good to go! You’ll be able to complete the entire tutorial just by following the instructions. Astro is for everyone! 🧑‍🚀 👩‍🚀 👨‍🚀

You will also need a GitHub (or similar) account for publishing your project to the web.

<details>
<summary>How do I use the checklists at the bottom of each page?</summary>

You check them off!

At the end of each page, you’ll find a clickable checklist of tasks you should now be able to do. Check these items off to see your progress in the Tutorial Tracker.

Using the tracker is optional, but it can help you remember your place if you complete the tutorial over multiple visits. You can also leave some checklists blank as a reminder of units that you want to revisit later.

*(This data is only saved to your browser’s local storage and is not available elsewhere. No data is sent to, nor stored by Astro.)*

</details>

<details>
<summary>Unit 1 is things I already know how to do. Can I skip it?</summary>

You can use the lessons inside Unit 1 to make sure you have the development tools and online accounts you’ll need to complete the tutorial. It will walk you through creating a new Astro project, storing it on GitHub, and deploying it to Netlify.

If you create a new, empty Astro project and are comfortable with your setup, you can safely skip ahead to Unit 2 where you will start making new pages in your project.

</details>

<details>
<summary>What if I need help, or want to learn more about Astro?</summary>

Our friendly Astro Discord server is the place to be!

Hop into the support forum channel to ask questions, or say hi and chat in **#general** or **#off-topic**.

</details>

<details>
<summary>Where can I leave feedback about this tutorial?</summary>

This tutorial is a project of our Docs team. You can find us on Discord in the **#docs** channel, or file issues to the Docs repo on GitHub.

</details>

# Check in: Unit 1 - Setup
Now that you know what you’re going to build, it’s time to set up all the tools you’ll need!

This unit shows you how to set up your development environment and deploy to Netlify. Skip ahead to Unit 2 if you are already comfortable with your environment and workflow.

>Take the tutorial in an online code editor
>
>Want to complete this tutorial in an online code editor instead? Follow the instructions below for getting >started on Google IDX.
><details>
><summary>Using Google IDX: Follow these instructions, then go directly to Unit 2!</summary>
>
>### Set up IDX
>
>1. Follow the external link to [open the “Empty Project” template in a new workspace on IDX](https://astro.new/minimal?on=idx).  
>2. Follow the prompt to log into your Google account if you are not already logged in.  
>3. Enter a name for your project if you want to change it from the default “Empty Project.” Click **Create**.  
>4. Wait for the workspace to be created. This may take 30–60 seconds. If all goes well, you will see the Astro project loaded in an online code editor.  
>
>### Wait for IDX to Run Scripts
>
>- IDX will run two scripts: one to install Astro and another to start the development server.  
>- Note that you may briefly see a message that your workspace “couldn’t find Astro” if your workspace loads before Astro has finished installing.  
>- This message can be ignored and cancelled if it does not clear itself.  
>
>### Make a Change
>
>- If all goes well, you should see the code for the file `src/pages/index.astro` opened in split screen with a >live preview of the website.  
>- Follow the instruction to [**"Write your first line of Astro"**](https://docs.astro.build/en/tutorial/1-setup/3/) to make a change to this file.  
>
>### Create a GitHub Repository
>
>1. Navigate to the **"Source Control"** navigation item in the vertical menu bar, or open with `CTRL + SHIFT + G`.  
>2. Select the option to **Publish to GitHub**. This will create a new repository in your GitHub account.  
>3. Follow the prompts to sign in to your GitHub account.  
>4. Once signed in, return to the IDX tab and name your new repository. Choose whether it will be private or public.  
>
>- IDX will make an initial commit and publish to your new GitHub repo.  
>- Going forward, whenever you have changes to be committed back to GitHub, the **Source Control** icon will show a number representing the changed files.  
>- Navigate to this tab and perform two steps (**commit** and **publish**) to enter a commit message and update your repository.  
>
>### Deploy Your Site
>
>- If you’d like to deploy to Netlify and have a live published version of your site while you work, go ahead in Unit 1 to [**Deploy your site to the web.**](https://docs.astro.build/en/tutorial/1-setup/5/)
>- Otherwise, skip to [Unit 2](https://docs.astro.build/en/tutorial/2-pages/) to start building with Astro!  
>
></details>

## Where are you going?
In this unit, you will create a new project that is stored online in GitHub and connected to Netlify.

As you write code, you will periodically commit your changes to GitHub. Netlify will use the files in your GitHub repository to build your website, and then publish it on the internet at a unique address where anyone can view it.

Every time you commit a change to GitHub, a notification will be sent to Netlify. Then, Netlify will automatically rebuild and republish your live site to reflect those changes.

# Prepare your dev environment

>Get ready to…
>- Install any tools that you will use to build your Astro website

## Get the dev tools you need
### Terminal
You will use a **command line (terminal)** to create your Astro project and to run key commands to build, develop, and test your site.

You can access the command line through a local terminal program for your operating system. Common applications include **Terminal** (MacOS/Linux), **Command Prompt (Windows)**, and **Termux** (Android). One of these will probably already be on your machine.

### Node.js
For Astro to run on your system, you will also need to have [Node.js](https://nodejs.org/en/) installed, version v18.17.1 or v20.3.0 or later. (v19 is not supported.)

To check to see whether you already have a compatible version installed, run the following command in your terminal:

```Terminal window
node -v

// Example output
v18.17.1
```

If the command returns a version number higher than v18.17.1 or v20.3.0 (excluding any v19), you’re good to go!

If the command returns an error message like `Command 'node' not found`, or a version number lower than the required, then you need to [install a compatible Node.js version.](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Code Editor
Additionally, you will need to download and install a code editor to write your code.

>We’ll use…
This tutorial will use **VS Code**, but you can use any editor for your operating system.

[Download and install VS Code](https://code.visualstudio.com/#alt-downloads) or another code editor of your choice.

> ### Test your knowledge  
>  
> #### 1. A code editor, for making changes to your files and their content?  
> - web browser  
> - Terminal  
> - **VS Code**  
>  
> [Submit your answer](#)  
>  
> #### 2. An online version control provider for your repository?  
> - **GitHub**  
> - Terminal  
> - VS Code  
>  
> [Submit your answer](#)  
>  
> #### 3. An application for running commands?  
> - GitHub  
> - **Terminal**  
> - web browser  
>  
> [Submit your answer](#)  


> ### Checklist for Moving On  
>  
> - [x] I can access the command line in a terminal.  
> - [x] I have Node.js installed.  
> - [x] I have a code editor like VS Code.  


### Resources
[FreeCodeCamp.org](https://freecodecamp.org/) external — a free educational site with full courses or quick refreshers in HTML, CSS, JS, and more.

# Create your first Astro project

> Get ready to…
> - Run the create astro setup wizard to create a new Astro project
> - Start the Astro server in development (dev) mode
> - View a live preview of your website in your browser

### Launch the Astro setup wizard
- The preferred way to create a new Astro site is through our create astro setup wizard.

<details>
<summary>npm</summary>

```bash
# create a new project with npm
npm create astro@latest -- --template minimal
```
</details> 
<details> 
<summary>pnpm</summary>

```bash
# create a new project with pnpm
pnpm create astro@latest --template minimal
```
</details> 
<details> 
<summary>Yarn</summary>

```bash
# create a new project with yarn
yarn create astro --template minimal
```
</details> 

- Confirm y to install create-astro

- When the prompt asks you where to create the project, type in the name of a folder to create a new directory for your project, e.g. ./tutorial

> Note
> 
> A new Astro project can only be created in a completely empty folder, so choose a name for your folder that does not already exist!

- When the prompt asks you whether or not to install dependencies, type or select y.

- When the prompt asks you whether or not to initialize a new git repository, type or select y.

When the install wizard is complete, you no longer need this terminal. You can now open VS Code to continue.

## Open your project in VS Code
- Open VS Code. You will be prompted to open a folder. Choose the folder that you created during the setup wizard.

- If this is your first time opening an Astro project, you should see a notification asking if you would like to install recommended extensions. Click to see the recommended extensions, and choose the Astro language support extension. This will provide syntax highlighting and autocompletions for your Astro code.

- Make sure the terminal is visible and that you can see the command prompt, such as:

```Terminal window
user@machine:~/tutorial$
```

> Keyboard shortcut
To toggle the visibility of the terminal, use Ctrl + J (macOS: Cmd ⌘ + J).

You can now use the terminal built right into this window, instead of your computer’s Terminal app, for the rest of this tutorial.

### Run Astro in dev mode
In order to preview your project files as a website while you work, you will need Astro to be running in development (dev) mode.

#### Start the dev server
- Run the command to start the Astro dev server by typing into VS Code’s terminal:

<details>
<summary>npm</summary>

```bash
npm run dev
```
</details> 
<details> 
<summary>pnpm</summary>

```Terminal window
pnpm run dev
```
</details> 
<details> 
<summary>Yarn</summary>

```Terminal window
yarn run dev
```
</details> 


Now you should see confirmation in the terminal that Astro is running in dev mode. 🚀

#### View a preview of your website
Your project files contain all the code necessary to display an Astro website, but the browser is responsible for displaying your code as web pages.

- Click on the localhost link in your terminal window to see a live preview of your new Astro website!

(Astro uses http://localhost:4321 by default if port 4321 is available.)

Here’s what the Astro “Empty Project” starter website should look like in the browser preview:

A blank white page with the word Astro at the top.

> ### Using the Astro dev server
> 
> While the Astro server is running in dev mode, you will NOT be able to run commands in your terminal window. Instead, this pane will give you feedback as you preview your site.
> 
> You can stop the dev server at any time and return to the command prompt by typing `Ctrl + C` in the terminal.
> 
> Sometimes the dev server will stop on its own while you are working. If your live preview stops working, go back to the terminal and restart the dev server by typing `npm run dev`.


> ### Checklist
> - [x] I can create a new Astro project.
> - [x] I can start the Astro dev server.

### Resources
[Getting Started with Visual Studio Code](https://code.visualstudio.com/docs/introvideos/basics) external — a video tutorial for installing, setting up and working with VS Code

# Write your first line of Astro
> ready to…
Make your first edit to your new website

### Edit your home page
- In your code editor, navigate in the Explorer file pane to src/pages/index.astro and click on it to open the file’s contents in an editable tab.

The contents of your index.astro file should look like this:

```markdown
src/pages/index.astro
---
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} >
    <title>Astro</title>
  </head>
  <body>
    <h1>Astro</h1>
  </body>
</html>
```

- Edit the content of your page <body>.

Type in the editor to change the heading text on your page and save the change.

```diff
src/pages/index.astro
<body>
  - <h1>Astro</h1>  
  + <h1>My Astro Site</h1> 
</body>
```

- Check the browser preview and you should see your page content updated to the new text.

Congratulations! You are now an Astro developer!

The rest of this unit will set you up for success with version control and a published website you can show off.

> ### Checklist
> - [x]  can make changes and see them in the browser.
> - [x] I am an Astro developer!

# Store your repository online

>Get ready to…
Put your project repository online

This tutorial will use GitHub to store our repository and connect to a web host. You are welcome to use the online git provider of your choice.

>Note
If you are already familiar with git and have your own workflow, then create a new GitHub repository for your project using your preferred method. Skip ahead to the next page: [“Deploy your Site to the Web”.](https://docs.astro.build/en/tutorial/1-setup/5/)

### Create a repository on GitHub
Although there are a few ways to get your local code stored in GitHub, this tutorial will guide you through a method that does not require using git in the command line.

- Log in to GitHub.com in a browser and click the + in the upper right of the screen to make a new repository.

- Choose a name for your repository. This does not have to be the same name as your project folder.

- You will be presented with options, but you do not need to change any of the defaults. Scroll down and click the button to <kbd>Create Repository</kbd>


- You will be presented with various setup next steps, but you won’t need to use any of them. Make a note of the URL of your repository. You can now exit this page without doing anything.

### Commit your local code to GitHub
In the last section, you made a change to your page’s content. This means that your project files have changed, and VS Code should show a number on top of the “Source” menu icon. This source tab is where you will regularly go to update your files on GitHub.

- Click the Source Control tab in your VS Code to see a list of files that have changed. If you see a message that you need to install `git`, follow the instructions provided, then reload VS Code.

- Click the ••• “3 dots” menu above the commit message and choose <kbd>Remote > Add Remote.</kbd>

- Select Add <kbd>remote from GitHub.</kbd> If necessary, follow any authentication steps then return to VS Code and repeat this action.

- You should see a list of all your repositories on GitHub. Choose the one you created for this project. If you don’t see your project, paste in its GitHub URL directly. You may also be asked to give this repository a local name. You can select any name you like.

- At the top of the menu pane, there will be a place to enter a **commit message** (description of your file changes). Type in `initial commit` and press the Commit button to commit these changes.

- You may see a message telling you that you have no “staged” commits, and asking you if you want to stage them. Click Always and continue.

- Lastly, the list of changed files should be replaced with a <kbd>Publish</kbd> button. Click this to send your committed changes to GitHub.

### See your project on GitHub
To verify that your project is successfully stored on GitHub, visit GitHub.com and look under your account for a list of your repositories. Choose the new one you created, and verify that it contains your Astro project files.

> ### Checklist
> - [x]  I have stored my project on GitHub.

### Resources
Using [Git](https://code.visualstudio.com/docs/sourcecontrol/overview#_git-support) Source control in VS Code `external`

# Deploy your site to the web

> Get ready to…
>
> - Add your GitHub repository as a new Netlify app
> - Deploy your Astro site to the web

Here, you will connect your GitHub repository to Netlify. Netlify will use that project to build and deploy your site live on the web every time you commit a change to your code.

> We’ll use…
> 
> This tutorial will use Netlify, but you are welcome to use your preferred hosting service for deploying your site to the internet.

### Create a new Netlify site
- Create a free account at [Netlify](https://netlify.com/) if you do not already have one.

Make a note of your username. You will view your dashboard and any sites you create at `https://app.netlify.com/teams/username`

- Click <kbd>Add new site > Import an existing project.</kbd>

You will be asked to connect to a Git provider. Choose GitHub and follow the steps onscreen to authenticate your GitHub account. Then, choose your Astro project’s GitHub repository from the list provided.

- At the final step, Netlify will show you your app’s site settings. The defaults should be correct for your Astro project, so you can scroll down and click <kbd>Deploy site</kbd>.

Congratulations, you have an Astro website!

### Change your project name
On your site’s overview page in Netlify, you will see your randomly-generated project name, and your website URL of the form `https://project-name-123456.netlify.app.`You can change your project name to something more memorable, and this will automatically update your URL.

Visit your new website
Click on the URL in your site settings, or type it into a browser window to view your new website.

> **Test your knowledge**  
> You want to update the home page of your existing website. What steps do you take?  
>  
> - [ ] I open a terminal, run `create astro`, and then visit my Netlify URL.  
> - [ ] I change a setting in my Netlify app, then start a new Astro project on [astro.new](https://astro.new).  
> - [x] I make an edit to `index.astro`. I commit and push my changes to GitHub. Netlify will handle the rest!  
>
> [**Submit**](#)

> ### Checklist
> - [x]  I can view my updated website online.
> - [x]  I’m ready to get back to coding!

### Resources
- A step-by-step guide to deploying on [Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) <kbd>external</kbd>