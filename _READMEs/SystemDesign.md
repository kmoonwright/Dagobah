# SYSTEM DESIGN


INTRODUCTION
Key Points:
	Ask good questions - MVP (minimum viable product)
		Define the feature set
		Define scalability of the system
			How much data needs to be stored? How many requests need to be handled? What sort of latency is expected?
	Don't use buzzwords…
		Only speak about technologies and data structures you have in-depth knowledge of
	Clear and organized thinking
		Have a large overview of the entire system before going into detail
		Define all API's, who are the actors for the system
	Drive discussions
		You should be talking 80% of the time, interviewer 20% of the time
		Lead the discussion and preempt potential issues
	
	Features
		Ask the interviewer to see what they need and what can be excluded
	Define APIs
		Who will call them? How?
	Availability
		How much does the interviewer want? If a DB goes down, how much of the service will still be available?
	Latency Performance (only for client facing engineers, backend not so much)
		Improve performance for client facing services - add a cache?
	Scalability
		Will latency and availability stay the same as we increase the number of users? Increase the number of requests?
	Durability - relevant for DB design 
		Secured data on the backend for designing a DB
	Class Diagram - OOP
		How would you design a class and its related objects?
	Security & Privacy - Authentication
	Cost-effectiveness
		Is there an alternative solution that is less costly? What are the cost advantages and disadvantages with this solution?
