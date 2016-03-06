import { AppointmentSchema } from "./AppointmentSchema";
import { CalendarResponseObjectSchema } from "./CalendarResponseObjectSchema";
import { CancelMeetingMessageSchema } from "./CancelMeetingMessageSchema";
import { ContactGroupSchema } from "./ContactGroupSchema";
import { ContactSchema } from "./ContactSchema";
import { ConversationSchema } from "./ConversationSchema";
import { EmailMessageSchema } from "./EmailMessageSchema";
import { FolderSchema } from "./FolderSchema";
import { ItemSchema } from "./ItemSchema";
import { MeetingCancellationSchema } from "./MeetingCancellationSchema";
import { MeetingMessageSchema } from "./MeetingMessageSchema";
import { MeetingRequestSchema } from "./MeetingRequestSchema";
import { MeetingResponseSchema } from "./MeetingResponseSchema";
import { PostItemSchema } from "./PostItemSchema";
import { PostReplySchema } from "./PostReplySchema";
import { ResponseMessageSchema } from "./ResponseMessageSchema";
import { ResponseObjectSchema } from "./ResponseObjectSchema";
import { SearchFolderSchema } from "./SearchFolderSchema";
import { ServiceObjectSchema } from "./ServiceObjectSchema";
import { TaskSchema } from "./TaskSchema";

/**
 * Schemas - container for all schema objects
 */
export class Schemas {
    static AppointmentSchema: AppointmentSchema;
    static CalendarResponseObjectSchema: CalendarResponseObjectSchema;
    static CancelMeetingMessageSchema: CancelMeetingMessageSchema;
    static ContactGroupSchema: ContactGroupSchema;
    static ContactSchema: ContactSchema;
    static ConversationSchema: ConversationSchema;
    static EmailMessageSchema: EmailMessageSchema;
    static FolderSchema: FolderSchema;
    static ItemSchema: ItemSchema;
    static MeetingCancellationSchema: MeetingCancellationSchema;
    static MeetingMessageSchema: MeetingMessageSchema;
    static MeetingRequestSchema: MeetingRequestSchema;
    static MeetingResponseSchema: MeetingResponseSchema;
    static PostItemSchema: PostItemSchema;
    static PostReplySchema: PostReplySchema;
    static ResponseMessageSchema: ResponseMessageSchema;
    static ResponseObjectSchema: ResponseObjectSchema;
    static SearchFolderSchema: SearchFolderSchema;
    static ServiceObjectSchema: ServiceObjectSchema;
    static TaskSchema: TaskSchema;
    private static throwError(): any {
        throw "Bootstartcode not initiated this Schema";
    }
}