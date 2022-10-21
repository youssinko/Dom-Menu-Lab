var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

//Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector('main')
//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = ('var(--main-bg)')
//Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
//Add a class of flex-ctr to mainEl.
mainEl.classList.add('flex-ctr')
//Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
const topMenuEl = document.querySelector('#top-menu')
//Set the height topMenuEl element to be 100%
topMenuEl.style.height = '100%'
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
//Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around')
//Iterate over the entire menuLinks array and for each "link" object:
for (i = 0; i < menuLinks.length; i++) {
    //Create an <a> element.
    let aEL = document.createElement('a')
    //On the new element, add an href attribute with its value set to the href property of the "link" object.
    aEL.setAttribute('href', menuLinks[i].href)
    //Set the new element's content to the value of the text property of the "link" object.
    aEL.textContent = menuLinks[i].text
    //Append the new element to the topMenuEl element.

    topMenuEl.append(aEL)
}
//Select and cache the <nav id="sub-menu">element in a variable named subMenuEl
const subMenuEl = document.querySelector('#sub-menu')
//Set the height subMenuElelement to be 100%.
subMenuEl.style.height = "100%"
//Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around')
//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute'
//Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = '0'
//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a')
//Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;
//Attach a delegated 'click' event listener to topMenuEl
function handleClick(event) {
    //The first line of code of the event listener function should call the event object's preventDefault()method.
    event.preventDefault()
    //The second line of code function should immediately return if the element clicked was not an <a>element.
    if (event.target.matches('a')) {
        console.log(event.target.textContent)
    } else {
        return;
    }
    //Next in the event listener, if the clicked <a>link has a class of active
    if (event.target.classList.contains('active')) {
        //Remove the activeclass from the clicked <a>element
        event.target.classList.remove('active');
        //Set the showingSubMenuto false.
        showingSubMenu = false;
        //Set the CSS top property of subMenuElto 0
        subMenuEl.style.top = '0';
        return;

    }
    //Next, the event listener should remove a class name of active from each <a>element in topMenuLinks- whether the activeclass exists or not.

    //Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

    topMenuLinks.forEach(function (evt) {
        evt.classList.remove('active');
        //Next, the event listener should add a class name of active to the <a>element that was clicked.
        event.target.classList.add('active')

    })
    //Code the buildSubMenu function so that it:




    // Clears the contents of subMenuEl.
    
    function buildSubMenu() {
        subMenuEl.innerHTML = ''
        // Iterates over the subLinksarray passed as an argument; and for each "link" object:
        linkObj.subLinks.forEach(function (subLinkObj) {
            // Create an <a>element.
            let link = document.createElement('a')
            // On the new element, add an href attribute with its value set to the hrefproperty of the "link" object.
            link.setAttribute('href', subLinkObj.href)
            // Set the new element's content to the value of the text property of the "link" object.
            link.textContent = subLinkObj.text
            // Append the new element to the subMenuElelement.
            subMenuEl.append(link)
        }
        )
        //Attach a delegated 'click' event listener to subMenuEl.
        subMenuEl.addEventListener('click', function (subLinkEvent) {
            //The first line of code of the event listener function should call the event object's preventDefault()method.
            subLinkEvent.preventDefault();
            let sub = subLinkEvent.target
           // The second line of code function should immediately return if the element clicked was not an <a>element.
            if (sub.matches('a')) {
                //console.log the content of the <a>to verify the handler is working.
                console.log(sub)
                //Set showingSubMenu to false.
                showingSubMenu = false
                //Set the CSS topproperty of subMenuElto 0
                subMenuEl.style.top = '0'
                //Remove the class name of active from each <a>element in topMenuLinks- whether the activeclass exists or not.
                topMenuLinks.forEach(function (alink) {
                    alink.classList.remove('active')})
                    //Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.
                    mainEl.innerHTML = `<h1> ${sub.textContent}</h1>`
                
               }
                else {
                    return
                
                }
             
        
})

    }

    let linkObj = menuLinks.find(function (subLinkObj) {
        return subLinkObj.text === event.target.textContent
    })
// Set showingSubMenu to true if the clicked <a>element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.

// Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7
if (event.target.getAttribute('href') === '#') {
    // If showingSubMenu is true:

    // Call a buildSubMenu function passing to it the subLinks array for the clicked <a>element.
    // Set the CSS top property of subMenuEl to 100%.
    showingSubMenu = true
    buildSubMenu(linkObj)
    subMenuEl.style.top = '100%'

    // console.log(showingSubMenu)

} else {
    // Otherwise (showingSubMenu is false):
    // Set the CSS top property of subMenuEl to 0.
    showingSubMenu = false
    // console.log(showingSubMenu)
    subMenuEl.style.top = '0';
}


mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`
}

topMenuEl.addEventListener('click', handleClick)

// subLinkArray = []
// for (let i = 0; i < menuLinks.length ;i++){
//     console.log(menuLinks[i].hasOwnProperty('subLinks'))
//      showingSubMenu = menuLinks[i].hasOwnProperty('subLinks')
//     if(menuLinks[i].hasOwnProperty('subLinks')){
//         subLinkArray.push(menuLinks[i].subLinks)
//     }
//  }
// console.log(subLinkArray)