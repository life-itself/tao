# Project Management Guide 

This document introduces our scrum-based agile process for delivering projects.

This process can be used for both technical and non-technical projects[^1].

The key principles of the agile approach to delivery are[^2]:

1. Organize work in **short cycles** called **sprints** [2(-4) weeks]
2. The management **does not interrupt** the team during a work cycle
3. The team meets so that each team member can share their progress. 
    * Team = delivery team + scrum master
4. The team estimates **how much time** work will take
5. The team decides **how much work** it can do in an iteration
6. The team decides **how** to do the work in the iteration
7. The team **measures its own performance**
8. The team defines work goals **before** each cycle starts
9. The team defines work goals (primarily) through **job stories**

[^1]: Whilst Scrum (and Agile generally) was originally developed for software projects, it has now successfully been used for many non-software projects.
[^2]: Adapted from http://www.forbes.com/sites/stevedenning/2011/04/29/scrum-is-a-major-management-discovery/


## Roles

These are largely based on standard scrum process see e.g. Wikipedia http://en.wikipedia.org/wiki/Scrum_(software_development)

### Project Owner

The Project Owner's primary task is the creation and prioritization of job or user stories. Specifically, the Project Owner:

* writes (or has the team write) customer-centric items typically [user stories][] or, preferably, [job stories][]
* **assigns "business" value** to them
* **prioritizes** (ranks) them
* and adds them to the [product backlog](http://en.wikipedia.org/wiki/Scrum_(software_development)#Product_backlog)

At Life Itself, the roles of the project owner and delivery team are often merged, meaning that individual team members may work independently on a project and write the job stories themselves. 

See also http://www.mountaingoatsoftware.com/agile/scrum/product-owner

[user stories]: /user-stories/
[job stories]: /job-stories/

### Scrum Master

Delivery is **facilitated** by a Scrum Master, who is accountable for **removing impediments to the ability of the team to deliver the product goals** and deliverables. The Scrum Master is **not** a **traditional team lead or project manager,** but acts as a buffer between the team and any distracting influences. The Scrum Master ensures that the process is used as intended. The Scrum Master is the **enforcer of the rules of process**, often **chairs key meetings**, and **challenges the team to improve**. The role has also been referred to as a **servant-leader** to reinforce these dual perspectives.

### Delivery Team

**Responsible for accomplishing** all goals at the end of each Sprint (the Sprint Goal). The Delivery Team is **self-organizing**, even though there may be some level of interface with other parts of the organization.


## Project Kick-Off and Preparation

Before one goes into the sprint cycle there is some preparatory work that should be done. Total time required should be no more than a day. However, for larger projects this may take longer. The Product Owner is overall responsible for this stage of the process.

### Project A10

Project Owner  
**[1h]**

This work should result in the creation of a Project Overview document, including: 
* Total Budget
* Aims and Requirements (Purpose, Outcomes and Outputs)
* Project Plan
* Issue tracker
* Risks

This is our [A10 template](https://docs.google.com/document/d/1q0eslSuhVty6HGxtfgichmryuhBEuFWSvx_aeJvPpi8/edit). 

While creating an A10 is highly encouraged, short tasks may be included in the sprint cycle whithout requiring the creation of an A10. 

### Key job stories

Project Owner as lead with involvement as appropriate of other relevant personnel
**[2-6h]**

* Generate first set of user stories for this project.
* Do **not** need to be comprehensive -- can add user stories later. However, good to have really core user stories down, and enough to cover, what (at this point), one would anticipate to be at least first 2-3 sprint iterations.
* Cannot over-state the value of generating (good) user stories at this point. Will have a transformative effect on the quality of the project.
* Should involve some or all of delivery team + scrum master, for at least some part of this, because:

  * Gets everyone up to speed
  * Rubber-duck test (have to explain and walk through user stories with others which helps clarify them)


## The 2-week Sprint Process

  * Tasks agreed in sprint planning meeting on a Wednesday -- sprint then runs for 2 weeks.
  * Tasks should be in product backlog. 


### Sprint Meeting

Every two weeks we hold a Sprint Meeting that consists of a Sprint Review and Retrospective of the last sprint and the Sprint Planning of the upcoming sprint. The meeting should usually be no longer than 2 hours. 

We created a [sprint meeting template](https://docs.google.com/document/d/1txPB-NunkDqQkUSfpxbG-dEW8sb9ItoMP3gnLtjQwJc/edit#heading=h.6kn92cs0unwo) that summarizes the structure of the meeting. 

#### Sprint Review 

What did we ship this sprint? See http://www.mountaingoatsoftware.com/agile/scrum/sprint-review-meeting

During the sprint review, the projects are assessed against the sprint goal determined during the last sprint planning meeting. Ideally, the team has completed each product backlog item brought into the sprint, but it’s more important that they achieve the overall goal of the sprint.

* Usually no more than 40 minutes. 
* Team shows what they accomplished during the sprint. 
* Any blockers are identified and discussed.
* Key learnings are captured. 
* Kept very informal. A sprint review meeting should not become a distraction or significant detour for the team; rather, it should be a natural result of the sprint.

#### Sprint Retrospective

What can we learn from this sprint for the future? See http://www.mountaingoatsoftware.com/agile/scrum/sprint-retrospective

* Kept even shorter.
* Start-Stop-Continue structure (what should team start doing, stop doing, and continue doing)

#### Sprint Planning 

* Meeting is timeboxed to 1-1.5h. 
* Team members create promises and goals for this sprint that are reviewed by the team
* Team members create new issues in gitlab and review the sprint board together 

* This meeting results in 2 outputs: 

  * A sprint goal for each project – a short, one- or two-sentence, description of what the team plans to achieve during the sprint. It is written collaboratively by the team and the product owner.'
  * A sprint backlog -- A sprint backlog is a list of the product backlog items in gitlab the team commits to delivering plus the list of tasks necessary to delivering those product backlog items.
     * Individual Tasks should be less than 2d total time (reduces estimation error).


## Key Concepts 

### Product Backlog

See http://www.mountaingoatsoftware.com/agile/scrum/product-backlog -- we use GitLab issues and project boards

* Product backlog consists of user stories and tasks related to user stories (should flag which user story a task relates to if not a single user story)
* Tasks are broken into at least 2 groups:

  * Prioritized (tasks in priority order). 
  * Unprioritized: storage place for all tasks that people have thought up but have not yet been prioritized (and are usually implicitly of lower priority than currently prioritized tasks)
  * Tasks should contain short descriptions 
  * **It's not necessary to start a project with a lengthy, upfront effort to document all requirements**

### Managing the Produt Backlog Board

This is the [layout](https://tao.lifeitself.us/working-with-us/#how-do-you-get-stuff-done) we use when creating issues. 

Milestones

* Sprints are organised via Milestones. Naming convention: `Sprint - DD MMM YYYY` with the date being the last day of the sprint.
* Issues scheduled for future sprints are allocated to the relevant milestone.
* Icebox - catch all milestones for issues that are "someday maybe" type of things (not likely to be worked on the near-term)

Labels

* ‘Prioritized Backlog’ - issues that have been reviewed and prioritised but have not been allocated yet.
* ‘In Progress’ - issues currently worked. 
* ‘Blocked/Waiting For’ - if there is a blocker. 
* ‘In Review’ - issue is reviewed and/or has to be signed off. Once signed off, the issue needs to be closed.
* ‘Wontfix’, ‘Duplicate’, ‘Invalid’ - closed issue without being delivered, e.g. circumstances have changed, a duplicate issue has emerged which provides the desired outcome or the issue isn’t valid anymore. Note: add a short comment specifying the reason why the issue hasn’t been delivered.

### Standup

See http://www.mountaingoatsoftware.com/agile/scrum/daily-scrum and http://en.wikipedia.org/wiki/Stand-up_meeting

* Daily team meeting
* Purpose: keep team in sync; identify surface blockers
* Each person answers 3 questions:

  * What did I accomplish in the last 24h? 
  * What will I accomplish in the next 24h? 
  * What obstacles are impeding my progress?

* The meeting is strictly timeboxed to 5-15m

  * Answers should be very short -- each person should speak for no more than 2 minutes (less as the team gets larger).
  * If bigger issues arise, take them out of standup.

### Job Stories

See [Job Stories][job stories]

### Estimating Time

Estimation is the process of estimating time to complete tasks. There are many approaches to estimation. See [here](https://playbook.datopian.com/issues-tasks/#adding-an-estimate) for an explanation of how we add time estimates to gitlab issues. 

Estimation is central to workability and low-stress because it allows us to make promises grounded in reality. It is up to the delivery team or the individual responsible for delivery to come up with time estimates. 

Equally important as estimating, is **assessing** performance against estimates so as to improve our skill at estimating -- without assessment estimates don't get better, without assessment you don't know your velocity (how much you can actually get done).

In general tasks that are over 5d should be broken down into smaller tasks. This will both improve estimation (errors greatly increase as tasks get larger) and make tasks better suited to planning (as tasks can fit inside one sprint).


### Estimating Business Value

This is done by the Project Owner and Project Owner ultimately has sole responsibility for setting business value. 

## FAQ

### What about a Project Manager -- is the Project Owner the PM?

From [*this answer*](http://stackoverflow.com/questions/10775637/scrum-different-product-owner-and-project-manager)

The Project Owner and a Project Manager are quite different.

On a traditional project, a Project Manager, as the title implies, manages a project.

However, on a Scrum project, the Development Team manages their own work.

Individual team members can be Project Owners and therefore be responsible for maximizing the value of the project and the work of the Development Team. They are the sole person responsible for managing the Project Backlog.

At Life Itself, individual team members sometimes work alone on projects, thereby fulfilling the role of the project owner and development team at the same time.

Product Backlog Management includes:

* Clearly expressing Product Backlog items;
* Ordering the items in the Product Backlog to best achieve goals and missions;
* Ensuring the value of the work the Development Team performs;
* Ensuring that the Product Backlog is visible, transparent, and clear to all, and shows what the Scrum Team will work on next;
* Ensuring the Development Team understands items in the Product Backlog to the level needed.

