# Library-Analysis

## Data Analytics and Visualization

### Project Overview
This project analyzes the number of students studying in the library over a particular time period to observe trends. The study aims to answer key questions about student behavior in the library, including peak hours, busiest days, and individual study durations.

### Research Questions Investigated
1. What is the average time spent by students in the library during a time interval of 5 days?
2. What is the most crowded time in a day?
3. Among the 5 days considered in the survey, what was the busiest day?
4. Which student spent the most time in the library?

### Data Collection
- **Source**: Library entry/exit register
- **Method**: Data was collected manually from the register

### Dataset Information
```plaintext
Number of Data Points: 132
Attributes & Types:
  - Name (Object)
  - Date (Datetime64[ns])
  - In Time (Object)
  - Out Time (Object)
  - Total Duration (Timedelta64[ns])
  - Duration (minutes) (Float64)
```

### Findings
```plaintext
Average Time Spent in Library: 230.40 minutes (3.84 hours)
Most Crowded Time: 11:00 - 12:00 (70 people present)
Busiest Day: January 7, 2025 (30 students recorded)
Student Who Spent the Most Time: Hemanth (14 hours)
```

### Challenges Faced
1. Difficulty in reading manual records, especially unclear student IDs.
2. Manual filtering required to remove duplicate entries from frequent visitors.
3. Some students did not re-enter the register after leaving for breaks, leading to inaccurate time logs.

### Assistance Used
- Online resources were used to convert date and time attributes.
- Internet references helped in calculating the cumulative number of students present per hour.

### Conclusion
This analysis provides insights into library usage trends, helping in resource planning and student behavior studies. Future improvements could include automating data collection through digital entry systems for improved accuracy.
