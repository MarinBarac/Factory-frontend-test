"use strict";

$(document).ready(function () {
  // Selecting all DOM elements
  const leftArrow = $('#left-arrow');
  const leftArrowImg = $('#left-arrow img');
  const rightArrow = $('#right-arrow');
  const rightArrowImg = $('#right-arrow img');
  const slider1 = $('.slider-1');
  const slider2 = $('.slider-2'); // Handling mouseenter and mouseleave events

  rightArrow.on('mouseenter', () => {
    rightArrowImg.attr('src', 'Assets/arrow-blue-right.png');
  });
  rightArrow.on('mouseleave', () => {
    rightArrowImg.attr('src', 'Assets/arrow-gray-right.png');
  });
  leftArrow.on('mouseenter', () => {
    leftArrowImg.attr('src', 'Assets/arrow-blue-left.png');
  });
  leftArrow.on('mouseleave', () => {
    leftArrowImg.attr('src', 'Assets/arrow-gray-left.png');
  }); // Making slider work

  let direction = 0; // Handling righ arrow click

  rightArrow.on('click', () => {
    direction = 1;
    let leftWidthOne = $('.slider-1 .img:nth-child(5)').width();
    let rigthWidthOne = $('.slider-1 .img:nth-child(6)').width();
    let leftWidthTwo = $('.slider-2 .img:nth-child(4)').width();
    let rigthWidthTwo = $('.slider-2 .img:nth-child(5)').width();
    slider1.css('transform', "translate(calc(".concat(leftWidthOne, "px + ").concat(rigthWidthOne, "px + 20px))"));
    slider2.css('transform', "translate(calc(".concat(leftWidthTwo, "px + ").concat(rigthWidthTwo, "px - 160px + 20px))"));
  }); // Handling left arrow click

  leftArrow.on('click', () => {
    direction = -1;
    slider1.css('transform', "translate(0)");
    slider2.css('transform', "translate(-160px)");
  }); // Making slider-1 transition work

  slider1.on('transitionend', () => {
    direction === -1 ? slider1.append($('.slider-1 .img:first-child')) : slider1.prepend($('.slider-1 .img:last-child'));
    let childWidth = $('.slider-1 .img:nth-child(6)').width();
    slider1.css({
      transition: 'none',
      transform: "translate(calc(".concat(childWidth, "px + 10px))")
    });
    setTimeout(() => {
      slider1.css('transition', 'all 0.5s');
    });
  }); // Making slider-2 transition work

  slider2.on('transitionend', () => {
    direction === -1 ? slider2.append($('.slider-2 .img:first-child')) : slider2.prepend($('.slider-2 .img:last-child'));
    let childWidth = $('.slider-2 .img:nth-child(5)').width();
    slider2.css({
      transition: 'none',
      transform: "translate(calc(".concat(childWidth, "px - 160px + 10px))")
    });
    setTimeout(() => {
      slider2.css('transition', 'all 0.5s');
    });
  });
});