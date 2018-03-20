import React from 'react';
import Header from './header';

describe('<Header />', () => {
    let Wrapper, Span;
    beforeEach(() => {
        Wrapper = shallow(<Header />);
        Span = Wrapper.find('span');
    })
    
    it('Should has a span element', () => {
        expect(Span).toHaveLength(1);
    });

    it('Should render <Header /> without crash', () => {
        shallow(<Header />);
    });
    it("Should have a state setup false", () => {
        expect(Wrapper.state().openMenu).toEqual(false);
    });
    
    it('Should have a menuOpened element', () => {
        expect(Wrapper.find('.menuClosed')).toHaveLength(1);
    });

    it('Should have a menuOpened element', () => {
        expect(Wrapper.find('.menuOpened')).toHaveLength(0);
    });

    it('Should have a menuClosed element after click menu', () => {
         Span.simulate('click');
        expect(Wrapper.find('.menuClosed')).toHaveLength(0);
    });

    it('Should have a menuOpened element after click menu', () => {
         Span.simulate('click');
        expect(Wrapper.find('.menuOpened')).toHaveLength(1);
    });

    it('Should set openMenu state to true', () => {
        Span.simulate('click');
        expect(Wrapper.state().openMenu).toEqual(true);
    });

    it('Shoul call the function', () => {
        const Spy = jest.spyOn(Header.prototype, 'setState');
        Span.simulate('click');
        expect(Spy).toHaveBeenCalled();
    });

    it('Should be a instance', () => {
        const Instance = new Header();
        expect(Instance).toBeInstanceOf(Header);
    });

    it('Should call printMessage with params', () => {
        const Spy = jest.spyOn(Wrapper.instance(), 'printMessage');
        const param = 'Hello World';
        Wrapper.instance().sendMessage(param);
        expect(Spy).toHaveBeenLastCalledWith(param);
    });

})