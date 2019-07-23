# Bellese Angular Design System

All documentation, installation instructions, and component examples have been moved to https://bellese.github.io/angular-design-system


# Build your own modal

Modal Shell:
Modal Shell is the easiest way to create your own unique modal. You’re going to need a few things to set this up. First make sure you followed the step above explaining how to modify app-root. Then we can start. You’re going to need to create a new component. Name it whatever you want. In the html you are going to start with <app-modal-shell>. Add the following inputs

* `modalTitle`: title of modal
* `modalCount`: allows for multiple modals
* `(closeModal)`: This will track when the modal closes.

After you have this setup you have options to build the modal

* `headerTemplate`: Modal header
* `bodyTemplate`: Modal Body
* `footerTemplate`: Modal Footer

These templates can be referenced through Angular's template syntax.
 
 ex: <ng-template #headerTemplate let-modalHeader="modalHeader">

In the TS file be sure to add inputs for modalTitle, modalData, and modalCount. And an output for closeModal;

Everything is handled automatically once you provide these input and outputs. Matter of fact the only one you are directly interacting with is modalData. And this is the data you need to make you modal body interactive. You should have a solid understand of how this works already. 

Once you bundle this up you are good to go. Make sure you add this component as an entry component inside your app.module.ts. 
Now you have created your own reusable modal.

Now when you are ready to add this to a page, just go to your new page controller and import the modal component you just built and pass that component as a variable to app-modal under modalComponent. Be sure to pass in modalTitle, ID and modalData. First focus is optional but it is neseccary if you want to focus on something in the modal other than the cancel button when the modal first opens. By 508 standards the first input should be focused on. 
From here you are all set. 

The modal is built the way it is because we have to come up with a way to destroy the modal after it has been enabled, if we dont we run into memory leak issues. This will cause the modal to take on values from a previous implementation. This will become a bigger issue if/when we start adding forms to modals.
