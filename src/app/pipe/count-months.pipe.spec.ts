import { CountMonthsPipe } from './count-months.pipe';

describe('CountMonthsPipe', () => {
  it('create an instance', () => {
    const pipe = new CountMonthsPipe();
    expect(pipe).toBeTruthy();
  });
});
