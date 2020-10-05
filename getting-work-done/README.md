# Getting Work Done

This Guide aims to introduce you to the way we get work done at Life Itself. As we work mostly self-organized and independent, it is important to understand some of the key tools and processes. 

If you have not yet been onboarded, please check the [Onboarding Guide](https://tao.lifeitself.us/onboarding/#onboardee-journey-overview) to get set up.

## 2-week Sprint Process 

Work is organized in **short cycles** called **sprints**. Each sprint cycle is initiated by a spint meeting, where team members review the past sprint and set new goals and tasks for the upcoming sprint. 

Our [Project Management Guide](https://tao.lifeitself.us/project-management%20/#project-management-guide/) explains our scrum-based agile process for delivering projects in more detail. 

## How do we set up projects?

Before project kick-off there is some preparatory work that should be done. Total time required should be no more than a day. However, for larger projects this may take longer. The Project Owner is overall responsible for this stage of the process. 

Read more about the [Project Owner](https://tao.lifeitself.us/project-management%20/#project-owner) and other roles within the team. 

Preparation usually includes the creation of a Project A10 and key job stories, as well as ongoing documentation in the Project DB. These will be explained in more detail below. 

### Project A10

The Project A10 serves as a a Project Overview document. 
It is intended to document the project throughout its proposal, initiation, and completion stages. 
This is our [A10 template](https://docs.google.com/document/d/1q0eslSuhVty6HGxtfgichmryuhBEuFWSvx_aeJvPpi8/edit). 

Before the project is initiated, the project owner should note:

* Key expected outcomes
* Budget and Ressourcing estimates 
* Team members involved  
* Total Budget
* Aims and Requirements (Purpose, Outcomes and Outputs)
* Project Plan
* Issue tracker
* Risks

These may be continiously updated during the project. 

Finally, once a project has been completed, a retrospective should be filled out, that includes key learnings gained from the project process. 


### Key job stories

The Project Owner, together with other relevant team members, is responsible for generating a first set of user stories for a project.

User stories are generated to gather project-specific requirements. Please read [here](https://playbook.datopian.com/user-stories/#what-is-a-user-story) to know more about what user stories are. 

In general, user stories: 

* Do **not** need to be comprehensive -- you can add more user stories later. However, it is good to have written the core user stories down, and enough to cover, what (at this point), one would anticipate to be at least first 2-3 sprint iterations.
* Will have a transformative effect on the quality of the project. We cannot over-state the value of generating (good) user stories at this point. 
* Should involve some or all of delivery team + scrum master, for at least some part of this, because:

  * Gets everyone up to speed
  * Rubber-duck test (have to explain and walk through user stories with others which helps clarify them)

At Life Itself, we move from user stories to job stories. Job stories give the team more context for the user’s situation and allow them to share their viewpoint and create a solution for what the user wants to do. Job stories are very similar to user stories with one key difference: personas becomes contexts (and jobs). 

Read more about [Job Stories](https://playbook.datopian.com/job-stories/). 


### Project DB




## How do we complete tasks?

We use Gitlab Issues to track our work. 
If you are new to Gitlab, please read this [introduction](https://tao.lifeitself.us/git/#part-one-what-is-git). 

### Creating Issues 

An issue is a way to put ideas/tasks into GitLab without impacting your repo. They can be edited to be open or closed, with the ability to organise them with tags, assign them to people in the group and apply due dates.

The issue can be written in Markdown, and is a good way of tracking your ‘to-do list’ in a project. To make one, go onto your sidebar, find the tab that says ‘Issues’, and click the green and white button that says ‘New Issue’. Fill it out, create the issue, and then it will be available to see for you and/or your group, depending on which repo you created it in.

### Issue Layout 

You should create an issue for any assignment, or project, that has more than one actionable step, and you should lay your issue out as follows:

```md
## Job Story
## Acceptance
## Tasks
## Analysis
```

E.g.

```md
## Job Story
I want to create an FAQ for new recruits, accessible from the Onboarding guide, so they have access to useful information that will make the joining process as smooth as possible. 

## Acceptance: 
* [ ] An FAQ section at the end of the Onboarding Guide with answers to the questions below. 

## Tasks: 
* [ ] Write answers to the following questions:
   1. How do I write an issue?
   2. How do I set/plan my work?
   3. How should I report on my work / progress?
   4. Who's my 'boss'? Who am I accountable to?
   5. Outside of my work responsibilities, do I have other commitments / things to attend?
   6. What's my work responsibilities?
   7. What's your culture? What makes you unique?
   8. How do you get stuff done? 
   9. How do your projects get initiated? 
   10.How does your budget get set?

## Analysis

None for this issue. Here you might include your questions and hypotheses, or other contextual information relevant to your issue. 
```

Once you’ve set out your issue like this, you should keep it up to date so that your team members can follow along. 

### Updating the Issue 

* First, ensure that it is labelled correctly. You can label issues so that issues with the same label appear together in your Issue Board on Gitlab. This makes reviewing outstanding issues easier. See more information on Labels and Milestones below. 

* [Record an estimate](https://docs.gitlab.com/ee/user/project/time_tracking.html) of how long it will take you to complete the issue. You will keep track of the time you spend in the same way.

* Make comments next to each task, **in bold**, to indicate how you’re progressing with each task. This should be done so that somebody else can see, at a glance, how you’re getting on. 

* You should keep a log of your progress in the Comments section of the Issue (including a record of how much time you are spending on the tasks). The difference between writing updates in the description and in the Comments section is that the Comments section represents the _flow_ of your work, whereas the Description represents the most up-to-date _state_ of your work. You should ensure you use both. 

* If you need someone else to assist you, you can @ them in the Comments section with a message to indicate what you’d like their help with. However, ensure you’ve generated a hypothesis first, and that you include it in your message. This way, you might find you can solve it yourself, and if you can’t, it helps your team follow your thought process. 

* If you are blocked, i.e. you cannot make progress without a response from a team member, label your issue as ‘Blocked’ and ensure the relevant person has been @’d in the comments so they are aware you require their assistance.

* Finally, once you’ve completed your issue, you can label the issue as ‘In review’ if it needs a team member to look over it, or you can close the issue altogether. You must include a brief comment explaining why the issue has been closed. You should start your comment with one of the following:

  * FIXED
  * INVALID
  * WONTFIX
  * DUPLICATE. 

* And follow it up with a short explanation of why the issue has been closed. Read a [more detailed explanation](https://playbook.datopian.com/issues-tasks/#closing-issues) in the Datopian playbook. 

### Product Backlog

Each sprint has a sprint backlog -- a list of the product backlog items in gitlab the team commits to delivering plus the list of tasks necessary to delivering those product backlog items. Read more about [the Product Backlog](https://tao.lifeitself.us/project-management%20/#product-backlog). 

### Labels and Milestones

Milestones

* Sprints are organised via Milestones. Naming convention: `Sprint - DD MMM YYYY` with the date being the last day of the sprint.
* Issues scheduled for future sprints are allocated to the relevant milestone.
* Icebox - catches all milestones for issues that are "someday maybe" type of things (not likely to be worked on the near-term). 

Labels

* ‘Prioritized Backlog’ - issues that have been reviewed and prioritised but have not been allocated yet.
* ‘In Progress’ - issues currently worked. 
* ‘Blocked/Waiting For’ - if there is a blocker. 
* ‘In Review’ - issue is reviewed and/or has to be signed off. Once signed off, the issue needs to be closed.
* ‘Wontfix’, ‘Duplicate’, ‘Invalid’ - closed issue without being delivered, e.g. circumstances have changed, a duplicate issue has emerged which provides the desired outcome or the issue isn’t valid anymore. Note: add a short comment specifying the reason why the issue hasn’t been delivered.


### Adding Estimates 

#### Estimating Time

Estimation is the process of estimating time to complete tasks. There are many approaches to estimation. See [here](https://playbook.datopian.com/issues-tasks/#adding-an-estimate) for an explanation of how we add time estimates to gitlab issues. 

Estimation is central to workability and low-stress because it allows us to make promises grounded in reality. It is up to the delivery team or the individual responsible for delivery to come up with time estimates. 

Equally important as estimating, is **assessing** performance against estimates so as to improve our skill at estimating -- without assessment estimates don't get better, without assessment you don't know your velocity (how much you can actually get done).

In general tasks that are over 5d should be broken down into smaller tasks. This will both improve estimation (errors greatly increase as tasks get larger) and make tasks better suited to planning (as tasks can fit inside one sprint).


#### Estimating Business Value

This is done by the Project Owner and Project Owner ultimately has sole responsibility for setting business value. 


### Closing Issues 





