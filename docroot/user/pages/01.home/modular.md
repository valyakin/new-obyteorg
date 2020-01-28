---
title: Home
onpage_menu: false
body_classes: ''

content:
    items: '@self.modular'
    order:
        by: default
        dir: asc
        custom:
            - _showcase
            - _timeline
            - _download
            - _team
            - _exchanges
            - _community


footerMenuOne: Product
product: 
    -
        name: Download Byteball
        link: link 1
    -
        name: Getting Started
        link: link 2
    -
        name: Explorer
        link: link 3
    -
        name: Features
        link: link 4
footerMenuTwo: Company
company: 
    -
        name: About Us
        link: link 11
    -
        name: Contact
        link: link 22
    -
        name: Blog
        link: link 333
footerMenuThree: Documents
documents:
    -
        name: White Papers
        link: link 1111
    -
        name: Wiki
        link: link 2222
    -
        name: Media Kit
        link: link 3333
footerMenuFour: Terms & Policy
terms:
    -
        name: Terms of Service
        link: link 4444
    -
        name: Privacy Statement
        link: link 5555
    -
        name: Security
        link: link 6666
community:
  -
    icon: /user/themes/obyte/assets/svg/social-icons/discord.svg
    iconHover: /user/themes/obyte/assets/svg/social-icons/hover/discord.svg
    link: http://discord.obyte.org/
  -
    icon: /user/themes/obyte/assets/svg/social-icons/wechat.svg
    iconHover: /user/themes/obyte/assets/svg/social-icons/hover/wechat.svg
    link: https://mp.weixin.qq.com/s/JB0_MlK6w--D6pO5zPHAQQ
  -
    icon: /user/themes/obyte/assets/svg/social-icons/telegram.svg
    iconHover: /user/themes/obyte/assets/svg/social-icons/hover/telegram.svg
    link: https://t.me/obyteorg
  -
    icon: /user/themes/obyte/assets/svg/social-icons/medium.svg
    iconHover: /user/themes/obyte/assets/svg/social-icons/hover/medium.svg
    link: https://medium.com
  -
    icon: /user/themes/obyte/assets/svg/social-icons/reddit.svg
    iconHover: /user/themes/obyte/assets/svg/social-icons/hover/reddit.svg
    link: https://www.reddit.com/r/obyte/
  -
    icon: /user/themes/obyte/assets/svg/social-icons/bitcoin.svg
    iconHover: /user/themes/obyte/assets/svg/social-icons/hover/bitcoin.svg
    link: https://bitcointalk.org/index.php?topic=1608859.0
  -
    icon: /user/themes/obyte/assets/svg/social-icons/twitter.svg
    iconHover: /user/themes/obyte/assets/svg/social-icons/hover/twitter.svg
    link: https://twitter.com/ObyteOrg
  -
    icon: /user/themes/obyte/assets/svg/social-icons/facebook.svg
    iconHover: /user/themes/obyte/assets/svg/social-icons/hover/facebook.svg
    link: https://www.facebook.com/obyte.org
  -
    icon: /user/themes/obyte/assets/svg/social-icons/youtube.svg
    iconHover: /user/themes/obyte/assets/svg/social-icons/hover/youtube.svg
    link: https://www.youtube.com/channel/UCYAjbxT5zHfeTtXe_hr9Gxg/
---

# Say Hello to Grav!
## installation successful...

Congratulations! You have installed the **Base Grav Package** that provides a **simple page** and the default **Quark** theme to get you started.

!! If you see a **404 Error** when you click `Typography` in the menu, please refer to the [troubleshooting guide](http://learn.getgrav.org/troubleshooting/page-not-found).

### Find out all about Grav

* Learn about **Grav** by checking out our dedicated [Learn Grav](http://learn.getgrav.org) site.
* Download **plugins**, **themes**, as well as other Grav **skeleton** packages from the [Grav Downloads](http://getgrav.org/downloads) page.
* Check out our [Grav Development Blog](http://getgrav.org/blog) to find out the latest goings on in the Grav-verse.

!!! If you want a more **full-featured** base install, you should check out [**Skeleton** packages available in the downloads](http://getgrav.org/downloads).

### Edit this Page

To edit this page, simply navigate to the folder you installed **Grav** into, and then browse to the `user/pages/01.home` folder and open the `default.md` file in your [editor of choice](http://learn.getgrav.org/basics/requirements).  You will see the content of this page in [Markdown format](http://learn.getgrav.org/content/markdown).

### Create a New Page

Creating a new page is a simple affair in **Grav**.  Simply follow these simple steps:

1. Navigate to your pages folder: `user/pages/` and create a new folder.  In this example, we will use [explicit default ordering](http://learn.getgrav.org/content/content-pages) and call the folder `03.mypage`.
2. Launch your text editor and paste in the following sample code:

        ---
        title: My New Page
        ---
        # My New Page!

        This is the body of **my new page** and I can easily use _Markdown_ syntax here.

3. Save this file in the `user/pages/03.mypage/` folder as `default.md`. This will tell **Grav** to render the page using the **default** template.
4. That is it! Reload your browser to see your new page in the menu.

! NOTE: The page will automatically show up in the Menu after the "Typography" menu item. If you wish to change the name that shows up in the Menu, simple add: `menu: My Page` between the dashes in the page content. This is called the YAML front matter, and it is where you configure page-specific options.
