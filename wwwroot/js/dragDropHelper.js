window.dragDropHelper = {
    initializeDraggable: function (elementId) {
        const element = document.getElementById(elementId);
        element.draggable = true;

        element.addEventListener('dragstart', function (event) {
            event.dataTransfer.setData('text/plain', elementId);
            event.dataTransfer.effectAllowed = 'move';
        });
    },

    initializeDropZones: function (parentElementId, dotNetHelper) {
        const parentElement = document.getElementById(parentElementId);

        parentElement.addEventListener('dragover', function (event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'move';
        });

        parentElement.addEventListener('drop', function (event) {
            event.preventDefault();
            const sourceId = event.dataTransfer.getData('text/plain');
            let targetElement = event.target;

            // Traverse up the DOM tree to find the closest name-tag element
            while (targetElement && !targetElement.classList.contains('name-tag')) {
                targetElement = targetElement.parentElement;
            }

            if (targetElement) {
                const targetId = targetElement.id;
                if (dotNetHelper) {
                    dotNetHelper.invokeMethodAsync('OnItemDropped', sourceId, targetId);
                }
            }
        });
    }
};
