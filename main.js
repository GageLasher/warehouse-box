const packages = [
    {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', lost: false}, 
    {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', lost: false}, 
    {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', lost: false}, 
    {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', lost: false}, 
    {heavy: true, priority: true, fragile: true, to: 'Brittany', 
    trackingNumber: 'acdd1133', lost: false}, 
    {heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', lost: false}, 
    {heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', lost: false}]

    let current = []


    function draw() {
        template = ""
       for (let i = 0; i < current.length; i++) {
           const package = current[i];
           template += `
           <tr>
              <th>Heavy</th>
              <th>Priority</th>
              <th>Fragile</th>
              <th>To:</th>
              <th>Tracking Number:</th>
            </tr>
           <tr>
              <td>${package.heavy}</td>
              <td>${package.priority}</td>
              <td>${package.fragile}</td>
              <td>${package.to}</td>
              <td>${package.trackingNumber}</td>
            </tr>
           `
       }
       document.getElementById("table-row").innerHTML = template
       
    }
    draw()

    function losePackage() {
        packages.forEach(package => package.lost = false)
        const randomPackage = Math.floor(Math.random() * packages.length)
        packages[randomPackage].lost = true
        current = packages
        draw()
    }

    function filter(filteredProperty) {
        let lostPackage = packages.find(package => package.lost)
        current = current.filter(package => package[filteredProperty] === lostPackage[filteredProperty])
        draw()
    }

    losePackage()

    function guess(event) { 
        // setting form to event.target and name to event.target.name.value ;)
        window.event.preventDefault()
        console.log(event.target.name.value);
       let form = event.target
        let name = form.name.value
        let lostPackage = packages.find(package => package.lost)
        if (lostPackage.to == name) {
            alert('You found the lost package')
        } else {
            alert('This package is not lost')
        }
        form.reset()
     
    }