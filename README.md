# CountdownTimer
A Countdown Timer designed to increase or decrease the time at 1 second interval.  
- The Timer shows the time in HH:MM:SS format.  
- It supports Start, Pause and Reset functionalities.
- Supported ranges for time:  
  - HH: 00 -> 99  
  - MM: 00 -> 59  
  - SS: 00 -> 59  
- Validations are present for any illegal values.
- If Time value is "00:00:00" and user clicks on Start, the Timer will increase at 1 second interval.
- If Timer is Paused while it was incrementing, on clicking Start again, it will resume from the time it was paused and continue the increment.
- If Timer value is put in by the user and Start is clicked, then Timer will decrement at an interval of 1 second unitl it reaches "00:00:00".
- If Timer is Paused while it was decrementing, on clicking Start again, it will resume from the time it was paused and continue the decrement.
- If the Timer reaches the time: "99:59:59", it will reset to "00:00:00" and start again.

Link to the app: https://noob0799.github.io/CountdownTimer/

## Reset/Initial State of Timer
![image](https://github.com/user-attachments/assets/756f7999-498e-4f68-a3d2-9fcfca7710ec)

## Timer Started
![image](https://github.com/user-attachments/assets/4035491d-6fb0-45bb-a52d-ba98310e42a8)

## Timer Paused
![image](https://github.com/user-attachments/assets/714c007a-c7e1-4182-8d90-ac22616a3222)


