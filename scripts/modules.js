const modules = document.querySelectorAll('.module');
modules.forEach(module => {
    const moduleBody = module.querySelector('.module-body');
    moduleBody.style.display = 'none';
    module.querySelector('.module-title').addEventListener('click', () => {
        
        module.querySelector('.module-title span').innerText = ' arrow_drop_up';
        // Check the current display state
        const isHidden = moduleBody.style.display === 'none';
        // Toggle the display state
        moduleBody.style.display = isHidden ? 'block' : 'none'
        if(moduleBody.style.display === 'none'){
            module.querySelector('.module-title span').innerText = ' arrow_drop_down';
        }
        
     });
});
