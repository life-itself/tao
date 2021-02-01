Playbook repository.

# Technical

This site is built using VuePress: https://vuepress.vuejs.org/

And deployed using Gitlab Pages (see `.gitlab-ci.yml`).

## Editing the Tao
### Direct Editing

You can edit any page of the Tao yourself. Just scroll to the bottom of the page, and find 'Edit this page'. 
1. Click 'Edit this page'
2. This takes you to Gitlab, and you can see you are looking at the Markdown version of the Tao page you were just on. 
3. Make your edit(s), using appropriate Markdown language.
4. Underneath the main edit box is a box titled 'Commit message'. Write an appropriate Commit message - see [here](https://playbook.datopian.com/style-guide/version-control/#commit-messages) for guidance on commit messages. Commit messages allow others to see what edits you have made, so it is important to label them clearly. (On the far left of the screen you can see 'Commits' in the sidebar. If you click that you can see everyone's commits on that file.)
5. Then click 'Commit changes'. (See [Gitlab website](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#gitlab-web-editor) for further advice)
6. Wait a couple of minutes for the change to appear. 

Bear in mind, this is a direct edit, and so will appear on the Tao website without being checked by anyone. Read below about merge requests to understand how to make changes that do get checked before going live. 

### Editing the Tao, using cloning, branches and merge requests

You might not want to make direct edits to the Tao, as once you have committed your changes, they appear on the website. So you might want to edit the site using a 'branch', and then create a merge request, which allows others to check your work first. 

See these guides for further detail:
1. [An Introduction to Git](https://tao.lifeitself.us/git/#part-one-what-is-git)
2. [Gitlab tutorials](https://docs.gitlab.com/ee/gitlab-basics/)


## Local Development

1. Git clone the repo.
2. Install node >= 8.0
3. Install VuePress etc: in this directory do `yarn install`
4. Then run the dev server: `yarn start`

