export function createSnowEffect() {
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        createSnowflake(snowContainer);
    }
}

function createSnowflake(container) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    const size = Math.random() * 5 + 2;
    const startPositionX = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 3 + 2;
    const opacity = Math.random() * 0.6 + 0.4;

    Object.assign(snowflake.style, {
        width: `${size}px`,
        height: `${size}px`,
        background: 'white',
        borderRadius: '50%',
        position: 'absolute',
        top: '-10px',
        left: `${startPositionX}px`,
        opacity: opacity,
        animation: `snowfall ${animationDuration}s linear infinite`
    });

    container.appendChild(snowflake);
} 