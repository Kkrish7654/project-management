import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Enter Your Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Enter Your Password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button type="submit" variant="ghost" className="mt-4">
                Signup
              </Button>
              <Button type="submit" className="mt-4">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
