import Image from "next/image";
import Logo from "@/pictures/Logo.png"
export default function Home() {
  return (
    <div className="w-[90vw] lg:w-[80vw] mx-auto">
      <Image
        src={Logo}
        alt=""
        width={0}
        height={0}
        className="w-[100px] md:w-[150px] md:h-[159px] ml-[70%] mt-[10vh]"
      />
      <div className="mt-[-2vh] mb-[3vh] text-[11px] md:text-[16px]">
        <p>
          HR Department, GAO Tek Inc.,
        </p>
        <p>
          244 Fifth Avenue, Suite A31, Manhattan, New York, N.Y., 10001, USA
        </p>
      </div>
      <div className="text-[13px] md:text-[20px] space-y-[3vh]">
        <div>
          Dear HR,<br />
          I hereby accept your offer of an internship position at GAO Tek Inc. (GAO) duly incorporated in  Delaware,USA, and with an office at the above address. I understand and agree that this agreement is  the sole agreement between GAO and me and overwrites all prior communications.
        </div>
        <div>
          I agree between the parties I am the primary beneficiary of this internship relationship and this unpaid  internship complies with The Fair Labor Standards Act {`(FLSA)`}of the USA:
          https://www.dol.gov/agencies/whd/fact-sheets.And this unpaid internship isto helpme to expand my  knowledge and skills.
        </div>
        <div>
          Based on the information provided to me and based on my situation, I understand and agree <br />that • This internship is unpaid.<br />
          • I or GAO may at any time in my or its sole discretion, terminate the internship without notice or  cause. Possible causes for terminations include, but not limited to, my poor work performance or  poor scores in training.<br />
          • I will obey the policies, rules, and regulations of GAO and comply with GAO&apos;s business practices and procedures.<br />
          • The education/experience received by me from the internship is for my express benefit. • This internship&apos;s duration is limited to the period in which the internship provides me with • beneficial learning.<br />
          • My work shall complement, rather than displace, the work of paid employees and this  internship provides significant educational benefits to me.<br />
          • GAO is not liable for injury sustained or health conditions that may arise during the course of the  internship.<br />
        </div>
        <div className="mt-[6vh]">
          Informalagreements reached and recorded in writing betweenme and the GAOHR staff provide  additional details aboutthis internship. They serve as a part of this agreement provided thatsuch  informal agreements do not conflict with any terms and conditions in this formal agreement.
        </div>
        <div className="mt-[6vh]">
          I agree that either party has the right to terminate this internship at any time and for any reason, for  example, GAO may terminate my internship if GAO is not satisfied with my performance, or I may  terminate this internship if I think it is not beneficial enough to me. Such termination shall be my sole remedy if I am not interested in this internship, I cannot fulfill my commitments, or GAO breaches, is  perceived to breach, or threatens to breach the above terms and conditions, including compliance of  FLSA. <br />The following in this entire paragraph applies during my internship, after termination with GAO, and as  well as in the case I will perform some tasks for GAO after the internship, I agree that all intellectual  properties, including but not limited to, copyrights, trade secrets, trademarks, and patents, developed by me or togetherwith others duringworking at GAOand/orits affiliatesshall belong exclusively to GAO  and/or its affiliates, and I hereby assign such intellectual properties exclusively to GAO and/or its  affiliates. Immediately upon termination, for whatever reason, of my relationship with GAO and/or its  affiliates, I shall hand overmy work to my superiors and dedicated personnel atGAO and/or its affiliates  in such a professional and responsible way to allow the responsible personnel have sufficient time and  opportunities to take over my work. I shall delete all and any documents and information from or  developed for GAO and/or its affiliates in my electronic devices, my personal online accounts as well as  printouts. I hereby guarantee and warrant that I shall never use such documents and/or information to  benefit any persons other than GAO and/or its affiliates, and I shall maintain the confidentiality of all  confidential information of GAO, including but notlimited to computersource codes, design documents,  information on compensation, staff, interns, contractors, partners, suppliers, customers, and the  contents of this agreement. I represent and warrant that I am permitted by relevant laws, such as  immigration and employment laws, to perform the work of this internship. I understand during my  internship with GAO I may work with personnel of GAO&apos;s affiliated companies, and I may work in an  affiliated company&apos;s office in Canada, China, the USA, or another country, and in such event, my  internship is still with GAO, notwith its affiliates. Subject to the terms and conditions ofthis agreement I  have rights to make a claim against GAO and against GAO only in case of any dispute. I shall not make  any claim against its affiliates in any event and I shall indemnify its affiliates related to any of my claims.
        </div>
        <div>
          I specifically agree to and acknowledge I assume all of the risks of participating in the internship  program. In consideration of the opportunity afforded to me to participate in the internship program, I  hereby agree that my assignees, heirs, guardians, and legal representatives, will not make a claim against GAO or any of its affiliated organizations, or either their officers or directors collectively or  individually, or any of its employees, for the injury to me or damage to my property, however caused,  arising from my participation in the internship program. I agree thatthe governing law ofthis agreement  shall be the federal laws of the USA without regard to conflict of law principles. The jurisdiction shall be  chosen by GAO at its sole discretion in case of a dispute.
        </div>
        <div>
          By signing below, I acknowledge that I have consented to participate in this internship under the terms  and conditions stated above.
        </div>
        <div>
          <div className="flex justify-between">
            <div>My Name:Nweke Justin</div>
            <div>     Signing Date: 27th of August 2025
            </div>
          </div>
          <div>
            Home Address: Igando, Lagos,Nigeria.
          </div>
          <div className="flex justify-between">
            <div>Email: nwekejustin580@gmail.com  </div>
            <div> Telephone: +2347045288330</div>
          </div>
          <div>Official Personal ID (Driver&apos;s License, Passport, Citizenship etc):I do not have any of these
          </div>
        </div>
      </div>
    </div>
  );
}
