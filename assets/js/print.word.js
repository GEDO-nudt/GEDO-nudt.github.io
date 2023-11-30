const options = {
    strings: [
        'First test.',
        'Second test, \nit will pause for three seconds. ^3000',
        "Second test, \nthe last sentence will go back to 'Second test, ', \noh no, this is the third test. ^1000",
        "It's going to start repeating.",
    ],
    typeSpeed: 50, // 打印速度
    startDelay: 300, // 开始之前的延迟300毫秒
    loop: true, // 是否循环
};

const typed = new Typed('#typed', options);