let currentWaterfallStep = 'requirements';

function advanceWaterfall() {
    const steps = ['requirements', 'design', 'implementation', 'testing', 'deployment', 'maintenance'];
    const currentIndex = steps.indexOf(currentWaterfallStep);

    if (currentIndex < steps.length - 1) {
        const currentStepElement = document.getElementById(currentWaterfallStep);
        if (currentStepElement) {
            currentStepElement.classList.remove('active');
            currentStepElement.classList.add('completed');
        }
        currentWaterfallStep = steps[currentIndex + 1];
        const nextStepElement = document.getElementById(currentWaterfallStep);
        if (nextStepElement) {
            nextStepElement.classList.add('active');
        }
    } else if (currentIndex === steps.length - 1) {
        const currentStepElement = document.getElementById(currentWaterfallStep);
        if (currentStepElement) {
            currentStepElement.classList.remove('active');
            currentStepElement.classList.add('completed');
        }
        alert("Waterfall model visualization completed!");
    }
}

// You'll need to call advanceWaterfall() at appropriate points in your
// main script.js to move through the Waterfall phases.

// Example of how you might integrate it into your existing functions:

// In your script.js, after the user adds process details, you might call:
// advanceWaterfall(); // Move to the 'design' phase

// After the scheduling calculation is done:
// advanceWaterfall(); // Move to the 'testing' phase

// And so on...