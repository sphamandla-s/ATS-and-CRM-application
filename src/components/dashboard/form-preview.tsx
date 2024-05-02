import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import React from 'react'
import { format } from 'date-fns';


type FormValues = {
    description: string;
    type: string;
    post: string;
    department: string;
    posting: string;
    requirements : string[];
    closing: Date;
    visibility : string;
};


function FromPreview({ values }: { values: FormValues }) {


    if (!values) {
        return null;
    }

    return (
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Preview Job Post</AlertDialogTitle>
                <AlertDialogDescription>

                    <div className="flex justify-between items-center gap-5">
                        <h3 className=" font-bold">Position : </h3>
                        <p className=" font-normal">{values.post}</p>
                    </div>

                    <div className="flex justify-between items-center gap-5">
                        <h3 className=" font-bold">department : </h3>
                        <p className=" font-normal">{values.department}</p>
                    </div>

                    <div className="flex justify-between items-center gap-5">
                        <h3 className=" font-bold">posting : </h3>
                        <p className=" font-normal items-start">{values.posting}</p>
                    </div>

                    <div className="flex justify-between items-center gap-5">
                        <h3 className=" font-bold">requirements : </h3>
                        <ol className=" font-normal items-start">{values.requirements.map((item,index)=>(
                            <li>{item}</li>
                        ))}</ol>
                    </div>

                    <div className="flex justify-between items-center gap-5">
                        <h3 className=" font-bold">type : </h3>
                        <p className=" font-normal">{values.type}</p>
                    </div>


                    <div className="flex justify-between items-center gap-5">
                        <h3 className=" font-bold">visibility : </h3>
                        <p className=" font-normal">{values.visibility}</p>
                    </div>
                    <div className="flex justify-between items-center gap-5">
                        <h3 className=" font-bold">closing Date: </h3>
                        <p className="font-normal">{format(values.closing, 'MMMM dd, yyyy')}</p>
                    </div>

                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    )
}

export default FromPreview