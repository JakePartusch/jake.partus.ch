---
type: blog
slug: quick-tips-for-using-a-screen-reader-voiceover-on-a-mac-kgh
title: Quick Tips for Using a Screen Reader (VoiceOver) on a Mac
publishDate: 2019-12-28
reactions: 5
---

# What is VoiceOver?

VoiceOver is a free screen reader built into Apple products (MacOS, iOS, etc). Screen readers are used by visually impaired users to navigate through content on their device(s).

As a web developer, it is vital that testing with a screen reader is part of the development workflow – much like running a linter, writing tests, or adjusting mobile responsiveness. Screen readers are a surprisingly large part of the web's user-base. It is estimated that between 1-2% of internet users in the United States use screen readers (~4 million) 😲.

A great first step in _finding_ accessibility issues in a website is by becoming familiar with and using a screen reader on a consistent basis. Since VoiceOver comes pre-installed on MacOS, there is no need to download or configure a third party application!

# Starting VoiceOver

For the purposes of this article, we'll focus on using VoiceOver with MacOS. VoiceOver works best with Safari, but also works well with both Chrome and Firefox. Luckily, starting VoiceOver is super simple:

Turn VoiceOver on/off &rarr; `⌘ + F5`

<img alt="VoiceOver welcome screen" width="400px" src="https://thepracticaldev.s3.amazonaws.com/i/p7z3qx2ucrmxsoeuo9mk.png"/>

After selecting "Use VoiceOver" the computer will start speaking the highlighted item on your focused application (black outline) while also providing a dialog box with the current transcript. At this point, the selected item on the screen can be changed by navigating with mouse. Feel free to click around to get a feel for the announcement of different types of elements.

<img alt="VoiceOver caption for Dev.to search bar" width="400px" src="https://thepracticaldev.s3.amazonaws.com/i/acpf69x6arm2vr0gkgeq.png"/>

# VoiceOver Keys

The VoiceOver command keys (VO) are required to interact with VoiceOver shortcuts:

`⌃ + ⌥ (Control + Option)`<br/>
or<br/>
`⇪ (Caps Lock)`<br/>

The following shortcuts will utilize the VoiceOver command keys to interact with VoiceOver.

# Navigation

Read next item &rarr; `VO + Right Arrow`<br/>
Read previous item &rarr; `VO + Left Arrow`<br/>

With these two commands, it is possible to navigate through the entire website as a VoiceOver user would. Screen readers not only focus on buttons and links, but also elements with text content.

<img alt="navigating VoiceOver with arrow keys" width="400px" src="https://thepracticaldev.s3.amazonaws.com/i/66p9s878bujkol9ismun.gif"/>

After using VoiceOver navigation, it may quickly be apparent that some items on the website are not announced in a meaningful way. This is a great opportunity to read up on [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) and [WCAG 2.1](https://www.w3.org/TR/WCAG21/). As web developers, we want our web applications to be usable by as many people as possible – fixing accessibility issues is often quick and extremely helpful to our screen reader users.

# Useful Shortcuts

The following shortcuts are not mandatory for using VoiceOver, but can be useful for quickly navigating through an application (rather than pressing the right arrow 1 million times 😉).

## Lock into Command Mode

Optionally, it is possible to lock into VoiceOver command mode, with the following shortcut:

Lock into command mode &rarr; `VO + ;`

After locking into command mode, it is not necessary to use the VoiceOver command keys, but this will restrict the ability to type normally as many keys are tied to VoiceOver shortcuts.

## VoiceOver Rotor

The Rotor allows the user to quickly navigate to different sections of the website and provides a useful widget to visualize the content of the web page. Navigation within the rotor can be accomplished with the arrow keys.

Start the Rotor &rarr;`VO + U`

<img alt="Navigating a website with the rotor" width="400px" src="https://thepracticaldev.s3.amazonaws.com/i/3efjbhb7hd1ztfh48ytn.gif"/>

## Navigation Shortcuts

Although this can also be accomplished with the rotor, sometimes it is useful to navigate to headings or links with the following commands:

Next Heading &rarr; `VO + ⌘ + H`<br/>
Previous Heading &rarr; `VO + ⌘ + ⇧ + H`<br/>
Next Link &rarr; `VO + ⌘ + L`<br/>
Previous Link &rarr; `VO + ⌘ + ⇧ + L`<br/>

# Useful Links/Further Reading

W3 references

- [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)
- [WCAG 2.1](https://www.w3.org/TR/WCAG21/)

VoiceOver references

- [VoiceOver complete command list](https://www.apple.com/voiceover/info/guide/_1131.html)
- [Deque's printable quick reference PDF](https://dequeuniversity.com/assets/pdf/screenreaders/voiceover-macos-guide.pdf)

Accessibility Testing

- [aXe Accessibility testing tool](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)
