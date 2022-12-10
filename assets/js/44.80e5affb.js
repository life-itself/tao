(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{300:function(e,t,n){"use strict";n.r(t);var a=n(10),o=function(e){e.options.__data__block__={mermaid_382ee1aa:'graph TD\n\nsubgraph "Onboarder"\n  contract[Create Contract]\n  send[Send Contract]\n  gsuite[Create GSuite Account<br/>And send email]\n  welcome[Send Welcome Email<br/>personal+work email]\n  addthem[Give them access]\n  \n  contract --\x3e send\n  gsuite --\x3e welcome\nend\n\nsubgraph "Onboardee"\n  recc[Receive Contract]\n  review[Review and Sign Contract]\n  \n  send --\x3e recc\n  recc --\x3e review\n  review --\x3e gsuite\n  gsuite --\x3e recc2[Receive GSuite setup<br/>Login and set password]\n  welcome --\x3e recc3[Receive welcome email]\n  recc3 --\x3e onboard[Visit<br/>Onboarding Guide]\nend\n\nsubgraph "Basics"\n  onboard --\x3e setup[Setup Accounts]\n  setup --\x3e phonebook[Add details to phonebook]\n  phonebook --\x3e emailob[Email Onboarder]\n  emailob --\x3e addthem\n  emailob --\x3e laptop[Setup Laptop]\n  laptop --\x3e read[read Working With Us]\n  read --\x3e issue[Create onboarding issue]\n  issue --\x3e complete[Complete onboarding issue]\n  complete --\x3e finishbasics[Finish Basics]\nend\n\nsubgraph "Welcome / Getting Started"\n  finishbasics --\x3e context[Company Context]\n  context --\x3e onboardmeet[Onboarding Meeting]\nend\n'}},s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"onboarding-a-new-team-member"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onboarding-a-new-team-member"}},[e._v("#")]),e._v(" Onboarding A New Team Member")]),e._v(" "),t("h2",{attrs:{id:"principles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#principles"}},[e._v("#")]),e._v(" Principles")]),e._v(" "),t("p",[e._v("The onboarding process has been designed to be lean and simple.")]),e._v(" "),t("p",[e._v("A member of the Ops team will produce a contract and initiate the onboarding process. The following is a guide for carrying this process out with the Onboardee.")]),e._v(" "),t("h2",{attrs:{id:"user-stories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-stories"}},[e._v("#")]),e._v(" User stories")]),e._v(" "),t("ul",[t("li",[e._v("Onboarder = person setting up the new team member (needs to be authorised by Rufus or Sylvie).")])]),e._v(" "),t("p",[t("strong",[e._v("As the Onboarder")]),e._v(" I want to know what I need to do for and with the Onboardee so they are set up and supported and nothing is missed out.")]),e._v(" "),t("p",[e._v("I need to know:")]),e._v(" "),t("ul",[t("li",[e._v("Things I need to do before the Onboardee starts their onboarding (e.g. ensure they have a contract).")]),e._v(" "),t("li",[e._v("Things to do during onboarding.")]),e._v(" "),t("li",[e._v("Things to do after onboarding.")])]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee1aa",graph:e.$dataBlock.mermaid_382ee1aa}}),t("h2",{attrs:{id:"onboarding-checklist-issue-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onboarding-checklist-issue-template"}},[e._v("#")]),e._v(" Onboarding Checklist: Issue template")]),e._v(" "),t("ul",[t("li",[e._v("Go to "),t("a",{attrs:{href:"https://github.com/lifeitself/ops/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/lifeitself/ops/"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Create an issue to track the Onboarding process")]),e._v(" "),t("li",[e._v("Name it "),t("code",[e._v("Ops Onboarding {First Name} {Last Name} {Date}")])]),e._v(" "),t("li",[e._v("Copy and paste the checklist below into your GitHub issue")]),e._v(" "),t("li",[e._v("Complete the steps to ensure the Onboardee has everything they need.")])]),e._v(" "),t("p",[e._v("Next, scroll down for more detail on completing the steps.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("* [ ] Contract drafted (and reviewed)\n  * [ ] [Optional] Folder in Life Itself - People/HR > Contracts created\n* [ ] Contract shared with the onboardee (CC the requestor and ops@lifeitself.us)\n* [ ] Contract signed\n* [ ] PDF created and sent to Onboardee\n* [ ] GSuite email created\n* [ ] ~~Add to all-team@lifeitself.us and other email groups as appropriate~~ (Automatic)\n* [ ] Email sent to welcome onboardee\n* [ ] Invite sent to welcome call\n* [ ] Invite to daily standup on Google calendar\n* [ ] Add to appropriate GChat channels\n* [ ] Invite to Xero and add bank details\n* [ ] Invite to Wordpress\n* [ ] Add to Life Itself on Github once the Onboardee has created a GitHub account\n* [ ] Welcome/Onboarding call complete\n* [ ] Welcomed to the team on standup\n* [ ] Confirm to the requestor that the Onboarding is complete\n")])])]),t("h3",{attrs:{id:"general-onboarding-agreements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-onboarding-agreements"}},[e._v("#")]),e._v(" General Onboarding Agreements")]),e._v(" "),t("ul",[t("li",[e._v("We start onboarding new joiners early enough (at least 5-7 days in advance) so that\n"),t("ul",[t("li",[e._v("we leave them enough time to review and sign the contract and do the prerequisites on their end")]),e._v(" "),t("li",[e._v("we leave ourselves enough time to set up their accounts on our end and ensure their smooth onboarding")])])]),e._v(" "),t("li",[e._v("The onboardee should be "),t("strong",[e._v("fully")]),e._v(" onboarded by us by the end of their first day (= Github issue fixed and closed)")])]),e._v(" "),t("h3",{attrs:{id:"create-the-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-contract"}},[e._v("#")]),e._v(" Create the Contract")]),e._v(" "),t("ol",[t("li",[e._v("Create a folder for the Onboardee in "),t("a",{attrs:{href:"https://drive.google.com/drive/folders/1pQNPDqDV4kJ95V1bgP8QgwoGJ1mavAnF",target:"_blank",rel:"noopener noreferrer"}},[e._v("Life Itself - People / HR/Contracts"),t("OutboundLink")],1),e._v(").")]),e._v(" "),t("li",[e._v("Create a draft contract:\n"),t("ol",[t("li",[e._v("Copy the template contract which is stored "),t("a",{attrs:{href:"https://drive.google.com/drive/folders/1pdh9lXpMXib3Uxan0i7F5qe2H8UKKHw4",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Move it to the Person’s folder you created in Step 1.")]),e._v(" "),t("li",[e._v("Rename it to "),t("code",[e._v("{Contractor Name} Life Itself Contract {Year}")]),e._v(".")]),e._v(" "),t("li",[e._v("Fill in any relevant sections, especially the key terms in the Schedule section.")]),e._v(" "),t("li",[e._v("Highlight everything that needs to be filled out by the Onboardee.")])])])]),e._v(" "),t("h3",{attrs:{id:"contractor-reviews"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contractor-reviews"}},[e._v("#")]),e._v(" Contractor Reviews")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("In Google Docs click Share and share with the contractor’s personal email.")]),e._v(" "),t("ul",[t("li",[e._v("Make sure to tick “Skip sending notification” as you will notify them by email in the next step.")])])]),e._v(" "),t("li",[t("p",[e._v("Email the contractor with the email below ("),t("strong",[e._v("cc")]),e._v(" "),t("a",{attrs:{href:"mailto:ops@lifeitself.us"}},[e._v("ops@lifeitself.us")]),e._v(").")]),e._v(" "),t("p",[e._v("Subject: Your Life Itself Contract: Please Review and Complete")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hello XXX,\n\nWelcome! This is your contract:\n\n{Insert Link to Google Doc}\n\nPlease review and fill in any relevant highlighted sections. If you have any questions please note these as comments in the doc. Then:\n\nEITHER: you have questions. If so, please email us to let us know so we can get those resolved 😀\n\nOR: it all looks good and you have no questions. Please then sign (insert your signature and date) and email us to let us know. We will then sign and send you a copy.\n\nMany thanks,\n\nXXX\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"email-contract"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#email-contract"}},[e._v("#")]),e._v(" Email Contract")]),e._v(" "),t("p",[e._v("Once both parties have signed we:")]),e._v(" "),t("ul",[t("li",[e._v("Review the contract and remove the highlighted parts.")]),e._v(" "),t("li",[e._v("Make a PDF of the contract.")]),e._v(" "),t("li",[e._v("Store that in Drive in the contract folder for that contractor.")]),e._v(" "),t("li",[e._v("Email the PDF of the signed contract to the contractor for their records "),t("strong",[e._v("cc")]),e._v("’ing "),t("a",{attrs:{href:"mailto:ops@lifeitself.us"}},[e._v("ops@lifeitself.us")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"setup-on-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup-on-systems"}},[e._v("#")]),e._v(" Setup on Systems")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("These steps can be done in parallel or out of order.")]),e._v(" "),t("p",[e._v("However, unless otherwise agreed, we should only do these steps "),t("strong",[e._v("once there is a signed contract")]),e._v(".")])]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("GSuite Account and Email:")]),e._v(" Create the Onboardee’s email account as "),t("a",{attrs:{href:"mailto:firstname@lifeitself.us"}},[e._v("firstname@lifeitself.us")]),e._v(" (or "),t("a",{attrs:{href:"mailto:firstname.lastname@lifeitself.us"}},[e._v("firstname.lastname@lifeitself.us")]),e._v(" if necessary) on the Google Admin page and ensure the log-in details are sent to the Onboardee’s personal email address.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Create accounts / send invitations")]),e._v(" on systems where they can’t create themselves")]),e._v(" "),t("ul",[t("li",[e._v("To add the Onboardee to Xero "),t("a",{attrs:{href:"https://docs.google.com/document/d/1bY7za2nRTN-shUDYQkW3_pjSP6G0RiEFiT5kpEOgY44/edit#heading=h.v59x2fkuxkjt",target:"_blank",rel:"noopener noreferrer"}},[e._v("see Xero access"),t("OutboundLink")],1),e._v(" and add their bank account details once received.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Welcome Call Invitation")]),e._v(": Send them an invitation for a Welcome Call within the next days.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Welcome email:")]),e._v(" Send them the welcome email to their Life Itself email.")]),e._v(" "),t("p",[e._v("Subject: Welcome to Life Itself – next steps in getting you set up")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hi {XXX},\n\nWelcome to Life Itself. This is the beginning of an amazing journey! 🚀 👩‍🚀\n\n**1. Start Setting Yourself Up!**\n\nPlease start getting yourself set up here:\n\nhttps://tao.lifeitself.us/onboarding/\n\n**Please complete as much of the Onboarding Guide as possible before your Welcome Call, making note of any questions you have**. Doing this allows us to grant you access to all systems and makes the the onboarding process super-smooth.\n\n**2. Welcome call**\n\nA welcome call has been scheduled and you will have received an invitation by email. Please accept the invite. 😊\n\nIf you are **unable** to make that time please let us know asap by declining the invite and suggesting an alternative time!\n\nLooking to having you on board!\n\nBest,\n\n...\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"welcome-call"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#welcome-call"}},[e._v("#")]),e._v(" Welcome Call")]),e._v(" "),t("p",[e._v("Here is the suggested agenda for the Welcome Call with the new team member. It should usually take no more than an hour.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("The Onboarder should capture questions during the onboarding meeting and forward any questions they can’t answer to other team members.")])]),e._v(" "),t("p",[t("strong",[e._v("Welcome")])]),e._v(" "),t("ul",[t("li",[e._v("Introduce yourself "),t("strong",[e._v("[5m]")])]),e._v(" "),t("li",[e._v("Ask them to intro themselves "),t("strong",[e._v("[5m]")])])]),e._v(" "),t("p",[t("strong",[e._v("What this call is about – intro to onboarding and company context")])]),e._v(" "),t("ul",[t("li",[e._v("We’ve designed the onboarding process to be a self-service one but I’m just going to say a few words to intro you to the company.")]),e._v(" "),t("li",[e._v("Overview of Life Itself.\n"),t("ul",[t("li",[e._v("What we do.")]),e._v(" "),t("li",[e._v("Team is global and fully remote, with team members in Germany, France and the UK.")]),e._v(" "),t("li",[e._v("Flat, self-organizing self-managing organisational set-up [very brief but this even informs the nature of this onboarding process!]")])])]),e._v(" "),t("li",[e._v("Who they will be working with")]),e._v(" "),t("li",[e._v("Talk about Values & Culture briefly, as our emphasis on culture is an important and distinctive part of our approach.\n"),t("ul",[t("li",[e._v("Why that’s important to us.")]),e._v(" "),t("li",[e._v("Example: Integrity.")])])]),e._v(" "),t("li",[e._v("Does the Onboardee have any questions about culture not answered in the Tao?")])]),e._v(" "),t("p",[t("strong",[e._v("Onboarding")])]),e._v(" "),t("p",[e._v("The Onboarder should have completed most of the "),t("RouterLink",{attrs:{to:"/onboarding/"}},[e._v("Onboarding Guide")]),e._v(".")],1),e._v(" "),t("ul",[t("li",[e._v("Check that they have done steps and whether they have any blockers or questions "),t("strong",[e._v("[15m]")])]),e._v(" "),t("li",[e._v("Introduce the Onboardee to how we manage our website on Wordpress and answer any questions they have about our other systems, such as GitHub. Show them around the All-Team Google drive and ensure they know the location of key documents, such as those relating to accounts.")])])],1)}),[],!1,null,null,null);"function"==typeof o&&o(s);t.default=s.exports}}]);