import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl';
import { EmailService } from './email/email.service';


const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDataSource()
);
const emailService = new EmailService();

export class Server {

    public static start() {

        console.log('Server started...');

        // Mandar email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     ['jjerezbaraona@gmail.com', 'contacto@supercbd.cl']
        // )
        // emailService.sendEmailWithFileSystemLogs(
        //     ['jjerezbaraona@gmail.com', 'contacto@supercbd.cl']
        // );

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok!`),
        //             (error) => console.log(error)
        //         ).execute(url);
        //         // new CheckService().execute('http://localhost:3000');

        //     }
        // );

    }

}