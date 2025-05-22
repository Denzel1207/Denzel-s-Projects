#Denzel Ntim CSC 491
#Welcome to the code for my calendar and event planner Capstone project.

import calendar
# This is a function that exhibits a calendar for a specific year or month and shows you all the dates.
def display_calendar():
    print("Welcome to Denzel's Calendar & Event Planner")
    year = int(input("Input year here: "))
    month = int(input("Input month here (1-12): "))
    
    # Here, the calendar for the picked month and year is posted.
    print("\n", calendar.month(year, month))

# This function here runs to exhibit the calendar
if __name__ == "__main__":
     display_calendar()
question = input("Is there anything more you would like to do? type yes to return to menu page for that and no to exit: ")
if question == "yes":
   
    events = {}

    def display_calendar(year, month):
        print("\n", calendar.month(year, month))

    def add_event(date, event):
        if date in events:
            events[date].append(event)
        else:
            events[date] = [event]
        print(f"Event has been added to calendar on {date}: {event}")

    def view_events(date):
        if date in events:
            print(f"Events on {date}:")
            for event in events[date]:
                print(f" - {event}")
        else:
            print("No events found on this date.")

    def delete_event(date, event):
        if date in events and event in events[date]:
            events[date].remove(event)
            if not events[date]:  # take away the dates if no events are remaining.
                del events[date]
            print(f"This event '{event}'  has been removed from {date}.")
        else:
            print("This event cannot be found.")

    def main():
        while True:
            print("i. Exhibit calendar")
            print("ii. Add an event")
            print("iii. View event")
            print("iv. Delete an event")
            print("v. Exit the calendar")
            
            pick = input("Pick your option please: ")
            if pick == 'i':
                year = int(input("Input year here: "))
                month = int(input("Input month here (1-12): "))
                display_calendar(year, month)
            elif pick == 'ii':
                date1 = input("Input year here (YYYY-MM-DD): ")
                event1ex = input("Input the event name: ")
                add_event(date1, event1ex)
            elif pick == 'iii':
                date = input("Input date here (YYYY-MM-DD): ")
                view_events(date)
            elif pick == 'iv':
                date2 = input("Input year here (YYYY-MM-DD): ")
                event2 = input("Input the event to delete: ")
                delete_event(date2, event2)
            elif pick == 'v':
                print("Exiting the program now. Goodbye, see you soon!")
                break
            else: 
                print("Incorrect choice. Try again.")

    if __name__ == "__main__":
        main()

else: print("Alright, have a good day then.")