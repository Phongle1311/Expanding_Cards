const panels = document.querySelectorAll('.panel');
var idx = 0;
panels.forEach(function(panel, index) {
    panel.addEventListener('click', function() {
        if (idx != index) panels[idx].classList.remove('active');
        panel.classList.add('active');
        idx = index;
    })
})