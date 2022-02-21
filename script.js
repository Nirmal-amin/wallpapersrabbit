    let myList = document.getElementById('myList');
    let listChildren = myList.children;

    const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    let dayOY = dayOfYear(new Date());
    

    let timeline;
    let addByOne;

    if(dayOY > 100 && dayOY < 200)
    {
        dayOY-=100;
    }
    if(dayOY > 200 && dayOY < 300)
    {
        dayOY-=200;
    }
    if(dayOY > 300)
    {
        dayOY-=300;
    }

    addByOne = dayOY;

    if(dayOY == 100 || dayOY == 200 || dayOY == 300 )
    {
        addByOne = 0;
    }

    // timeline = (addByOne*100) / (100); 
    timeline = addByOne;

    let bananasCopyarr;
    let bananaItem;
    let i;

    for(i=0;i<timeline;i++)
    {
        bananaItem = listChildren[i];
        bananasCopyarr = bananaItem.cloneNode(true);
        myList.appendChild(bananasCopyarr);
    }

    for(i=0;i<timeline;i++)
    {
        myList.removeChild(listChildren[0]);
    }

    function query()
    {
        divList.innerHTML = '';
       

        let string = document.querySelector('input').value;
        let str = string.toLowerCase();
        let achivedClass = document.getElementsByClassName(str);
        console.log(str);
        

        for(i=0;i<1;i++)
        {
            bananaItem = achivedClass[i];
            bananasCopy = bananaItem.cloneNode(true);
            divList.appendChild(bananasCopy);
        }
        
    }  
    

    document.addEventListener("click", e => {
        const isDropdownButton = e.target.matches("[data-dropdown-button]")
        if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    
        let currentDropdown
        if (isDropdownButton) {
            currentDropdown = e.target.closest('[data-dropdown]')
            currentDropdown.classList.toggle('active')
        }
    
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            if (dropdown === currentDropdown) return
            dropdown.classList.remove('active')
        })
    })
        
