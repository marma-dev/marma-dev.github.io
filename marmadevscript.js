const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const org = urlParams.get('org');
var r = document.querySelector(':root');
var resumebuttons = document.getElementsByClassName("resumelink");
switch (org) {
    
    case 'amazon':
        document.documentElement.style.cssText = "--bg-color:#070d0e; --box-color:#232F3E;--font-highlight:#ff9900; --navbar-color:#131921; --color-char1:#ff9900; --color-char2:#ff9900; --color-char3:#ff9900; --color-char4:#ff9900; --color-char5:#ff9900; --color-char6:#ff9900;";
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-Amazon.pdf');
        break;
    case 'apple':
        //document.documentElement.style.cssText = "--bg-color:#070d0e; --box-color:#232F3E;--font-highlight:#ff9900; --navbar-color:#131921; --color-char1:#ff9900; --color-char2:#ff9900; --color-char3:#ff9900; --color-char4:#ff9900; --color-char5:#ff9900; --color-char6:#ff9900;";
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-Apple.pdf');
        break;
    case 'commonwealth':
        //document.documentElement.style.cssText = "--bg-color:#070d0e; --box-color:#232F3E;--font-highlight:#ff9900; --navbar-color:#131921; --color-char1:#ff9900; --color-char2:#ff9900; --color-char3:#ff9900; --color-char4:#ff9900; --color-char5:#ff9900; --color-char6:#ff9900;";
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-CommonWealth.pdf');
        break;
    case 'google':
        document.documentElement.style.cssText = "--font-highlight:#d62d20; --navbar-color:rgb(37,36,35); --color-char1:#0057e7; --color-char2:#d62d20; --color-char3:#ffa700; --color-char4:#0057e7; --color-char5:#008744; --color-char6:#d62d20;";
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-Google.pdf');
        break;
    case 'harman':
        //document.documentElement.style.cssText = "--bg-color:#070d0e; --box-color:#232F3E;--font-highlight:#ff9900; --navbar-color:#131921; --color-char1:#ff9900; --color-char2:#ff9900; --color-char3:#ff9900; --color-char4:#ff9900; --color-char5:#ff9900; --color-char6:#ff9900;";
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-Harman.pdf');
        break;
    case 'intel':
        document.documentElement.style.cssText = "--box-color:#232F3E;--font-highlight:#00C7FD; --navbar-color:#131921; --color-char1:#00C7FD; --color-char2:#0068B5; --color-char3:#0068B5; --color-char4:#0068B5; --color-char5:#0068B5; --color-char6:#0068B5;";
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-Intel.pdf');
        break;
    case 'microsoft':
        document.documentElement.style.cssText = " --font-highlight:rgb(0,120,212); --navbar-color:rgb(37,36,35); --box-color:rgb(59,58,57)";
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-Microsoft.pdf');
        break;
    case 'o9':
        //document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-O9.pdf');
        break;
    case 'opentext':
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-OpenText.pdf');
        break;
    case 'philips':
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-Philips.pdf');
        break;
    case 'qualcomm':
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-Qualcomm.pdf');
        break;      
    case 'siemens':
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-Siemens.pdf');
        break;        
    case 'uber':
        document.getElementById(org).style.setProperty('display', 'block');
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume-Uber.pdf');
        break;        

    default:
        for (resumebutton of resumebuttons)
            resumebutton.setAttribute('href', '/resumes/Manish_Ranjan_Mahanta-Resume.pdf');
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function openexptab(tabname) {
    console.log(tabname);
    for (tablink of tablinks)
        tablink.classList.remove("active-link");
    for (tabcontent of tabcontents)
        tabcontent.classList.remove("active-tab");
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



