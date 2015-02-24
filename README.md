# Blog2TeX
This script converts any Wordpress blog of mathematical exposition into LaTeX using Javascript

I will just explain here how I came up with the code, how can it be used and the ideas for the project in the future.
First, I am an avid reader of math blogs, and while reading it from the screen is pretty nice since some writers usually give links to other pages that I can refer to so that there's no hassle from looking stuff up from search engine, sometimes I want to be able to print these blogs out and read them when my computor is not around. 

However, direct printing from the webpage is not feasible for this purpose because all the math symbols shown on these blogs are already converted to embedded image files, and these will fade out when printing on paper.

Therefore, I came up with an idea to write a script that can convert all these images back to LaTeX codes and display them on screen. This is entirely possible because all of these images have LaTeX codes as their 'alt' attribute, so I can just replace them with the attribute! 

 So I could figure out the algorithm, but learning to write a program is another issue. I used to know Java but I haven't used it for 5 years and everything becomes rusty, so it takes me much longer than it should to write such an easy script.
 
 I am also a FireFox user and am aware of existence of GreaseMonkey. The only thing I knew was that this extension would run a script and modify the source of a webpage (not the one at the server of course, only  the source that is shown up in our browser) before displaying the result. So I had to learn how DOM works and how it interacts with Javascript to be able to make a GreaseMonkey script. The result is this script, which is working as intended so far.
 
 How the script work
 
 -You will need FireFox browser and GreaseMonkey extension to run this.
 
-As mentioned before, the script will replace LaTeX pictures with their 'alt' attribute and this should give you LaTeX codes.

-It replaces any blank space with \mbox \\\ (I can't just use \\\ here because using \\\ two times in a row is not allowed).

-It adds \textbf{} and \emph around bolden text and emphasized text.

-After showing the result, you can copy entire page into your LaTeX compiler and compile to either DVI or PDF.

-IMPORTANT: The script will work on any Wordpress blogs, but as of this time I have made it so that it works for Professor Terence Tao's blogs at https://terrytao.wordpress.com/ that don't have blockquotes. To be able to make it work for other blogs, you have to modify your code depending on the layout of the page. For example, Terry Tao's blogs consist of several paragraphs with several topic names in the center, so I have to wrap \begin{center} and \end{center} around these words. You also have to add the metadata "@include https://webpage.com/*" to include the blog that you want in the script.

If you find some errors with the script, please report right away. I also welcome any suggestions since I am still inexperience with this kind of stuff.

Best,
Icylogik
