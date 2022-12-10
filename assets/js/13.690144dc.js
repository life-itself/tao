(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{304:function(e,t,o){"use strict";o.r(t);var a=o(10),i=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Playbook repository.")]),e._v(" "),t("h1",{attrs:{id:"technical"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#technical"}},[e._v("#")]),e._v(" Technical")]),e._v(" "),t("p",[e._v("This site is built using VuePress: "),t("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vuepress.vuejs.org/"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("And deployed using GitHub Pages.")]),e._v(" "),t("h2",{attrs:{id:"editing-the-tao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-tao"}},[e._v("#")]),e._v(" Editing the Tao")]),e._v(" "),t("h3",{attrs:{id:"direct-editing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#direct-editing"}},[e._v("#")]),e._v(" Direct Editing")]),e._v(" "),t("p",[e._v("You can edit any page of the Tao yourself. Just scroll to the bottom of the page, and find ‘Edit this page’.")]),e._v(" "),t("ol",[t("li",[e._v("Click ‘Edit this page’")]),e._v(" "),t("li",[e._v("This takes you to GitHub, and you can see you are looking at the Markdown version of the Tao page you were just on.")]),e._v(" "),t("li",[e._v("Make your edit(s), using appropriate Markdown language.")]),e._v(" "),t("li",[e._v("Underneath the main edit box is a box titled ‘Commit message’. Write an appropriate Commit message - see "),t("a",{attrs:{href:"https://playbook.datopian.com/style-guide/version-control/#commit-messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" for guidance on commit messages. Commit messages allow others to see what edits you have made, so it is important to label them clearly. (On the far left of the screen you can see ‘Commits’ in the sidebar. If you click that you can see everyone’s commits on that file.)")]),e._v(" "),t("li",[e._v("Then click ‘Commit changes’.")]),e._v(" "),t("li",[e._v("Wait a couple of minutes for the change to appear.")])]),e._v(" "),t("p",[e._v("Bear in mind, this is a direct edit, and so will appear on the Tao website without being checked by anyone. Read below about merge requests to understand how to make changes that do get checked before going live.")]),e._v(" "),t("h3",{attrs:{id:"editing-the-tao-using-cloning-branches-and-merge-requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#editing-the-tao-using-cloning-branches-and-merge-requests"}},[e._v("#")]),e._v(" Editing the Tao, using cloning, branches and merge requests")]),e._v(" "),t("p",[e._v("You might not want to make direct edits to the Tao, as once you have committed your changes, they appear on the website. So you might want to edit the site using a ‘branch’, and then create a merge request, which allows others to check your work first.")]),e._v(" "),t("p",[e._v("See these guides for further detail:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://tao.lifeitself.us/git/#part-one-what-is-git",target:"_blank",rel:"noopener noreferrer"}},[e._v("An Introduction to Git"),t("OutboundLink")],1)])]),e._v(" "),t("ol",[t("li",[e._v("Open the Tao repository in GitHub.")]),e._v(" "),t("li",[e._v("Clone it onto your local computer (using Visual Studio Code, and the “git clone” command)")]),e._v(" "),t("li",[e._v("On Visual Studio Code, you want to open the file you wish to edit. In this case, the command would be “nano “"),t("a",{attrs:{href:"http://CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("CONTRIBUTING.md"),t("OutboundLink")],1),e._v("””.")]),e._v(" "),t("li",[e._v("Make the edits.")]),e._v(" "),t("li",[e._v("Back on the command line, you can now create a branch, where you will save the edits you have made. To do this, type “git checkout -b ‘name-of-branch’”. The name of the branch is your choice, though do not use spaces.")]),e._v(" "),t("li",[e._v("Now you are working inside your new branch, and so changes made to this branch will not affect the master branch.")]),e._v(" "),t("li",[e._v("Type “git add "),t("a",{attrs:{href:"http://CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("CONTRIBUTING.md"),t("OutboundLink")],1),e._v("”. This will stage the changes you have made to the file, so they are ready to be committed in this new branch.")]),e._v(" "),t("li",[e._v("If you command “git status”, you will see your changes are ready to be committed.")]),e._v(" "),t("li",[e._v('Now you want to commit the change, and so you must also write an appropriate commit message (see the guides above for details on this). The command will be: "git commit -m “[File you are working on][size of change]: Commit message explaining what you have done”.')]),e._v(" "),t("li",[e._v("Now you want to push your changes back to github, so that others can see what you have done. The command for this is: “git push origin ‘name-of-branch’”. This will push your new branch to github, but still won’t affect the master branch at all.")]),e._v(" "),t("li",[e._v("When you do this, you will see you are prompted to follow a link to create a merge request. Follow the link.")]),e._v(" "),t("li",[e._v("On this page on GitHub, you can create a merge request, where you can choose who reviews the changes you have made. Once the merge has been approved, your changes will appear on the master branch and on the Tao website.")])]),e._v(" "),t("p",[e._v("Tip: whenever you are next editing the Tao repository on your local computer, make sure you use the command “git pull” before making any changes. This will ensure you are always editing the most up-to-date version of the shared Tao repository.")]),e._v(" "),t("h2",{attrs:{id:"local-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-development"}},[e._v("#")]),e._v(" Local Development")]),e._v(" "),t("ol",[t("li",[e._v("Git clone the repo.")]),e._v(" "),t("li",[e._v("Install node >= 8.0")]),e._v(" "),t("li",[e._v("Install VuePress etc: in this directory do "),t("code",[e._v("yarn install")])]),e._v(" "),t("li",[e._v("Then run the dev server: "),t("code",[e._v("yarn start")])])]),e._v(" "),t("h3",{attrs:{id:"in-detail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-detail"}},[e._v("#")]),e._v(" In Detail")]),e._v(" "),t("p",[e._v("VuePress is a static site generator like Hugo (it enables you to build a local copy of a website and preview changes you make to the Tao before pushing them to the live site).")]),e._v(" "),t("p",[e._v("Follow these instructions to install VuePress and build a local copy of the Tao.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Start by cloning the Tao repo to your local machine.")])]),e._v(" "),t("li",[t("p",[e._v("You need to use Yarn to install VuePress. To install Yarn, use Homebrew (if you haven’t downloaded Homebrew yet, you’ll need to do that first). You can then download Yarn by entering the command below into Terminal:")]),e._v(" "),t("blockquote",[t("p",[e._v("brew install yarn")])])]),e._v(" "),t("li",[t("p",[e._v("Now Yarn has been installed, you can use it to install VuePress within the project folder containing the site you want to be able to build.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Use Terminal to navigate to the location of the repo you just cloned to your local machine")])]),e._v(" "),t("li",[t("p",[e._v("Install VuePress as a local dependency within the repo")]),e._v(" "),t("blockquote",[t("p",[e._v("yarn add -D vuepress")])])])])]),e._v(" "),t("li",[t("p",[e._v("To build a local copy of the site, while inside the Tao repo in Terminal type")]),e._v(" "),t("blockquote",[t("p",[e._v("yarn start")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);