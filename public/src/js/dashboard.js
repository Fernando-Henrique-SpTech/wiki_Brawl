const bar = new ProgressBar.Line('#progress-container', {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#999',
    trailWidth: 4,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            fontFamily: 'Roboto',
            fontWeight: 900,
            color: '#000',
            position: 'absolute',
            fontSize: '20px'
        },
        autoStyleContainer: false
    },
    from: { color: '#F00' },
    to: { color: '#0F0' },
    step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});
bar.animate(0.5);  